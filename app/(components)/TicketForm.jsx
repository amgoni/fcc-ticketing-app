"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = ({ ticket }) => {
  const router = useRouter();

  const EDITMODE = ticket._id === "new" ? false : true;

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData.title = ticket.title;
    startingTicketData.description = ticket.description;
    startingTicketData.priority = ticket.priority;
    startingTicketData.progress = ticket.progress;
    startingTicketData.status = ticket.status;
    startingTicketData.category = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const response = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        router.push("/");
      } else {
        throw new Error("Failed to update ticket.");
      }
      return;
    } else {
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFormData(startingTicketData);
        router.push("/");
      } else {
        throw new Error("Failed to create ticket.");
      }
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Edit" : "Create"} Your Ticket</h3>

        <label htmlFor="">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label htmlFor="">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="">Priority</label>
        <div className="">
          <input
            id="priority-1"
            type="radio"
            name="priority"
            value="1"
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label htmlFor="">1</label>

          <input
            id="priority-2"
            type="radio"
            name="priority"
            value="2"
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label htmlFor="">2</label>

          <input
            id="priority-3"
            type="radio"
            name="priority"
            value="3"
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label htmlFor="">3</label>

          <input
            id="priority-4"
            type="radio"
            name="priority"
            value="4"
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label htmlFor="">4</label>

          <input
            id="priority-5"
            type="radio"
            name="priority"
            value="5"
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label htmlFor="">5</label>
        </div>

        <label htmlFor="">Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />

        <label htmlFor="">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <button className="btn max-w-xs" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
