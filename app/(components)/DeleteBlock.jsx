"use client";

import React from "react";
import { FaX } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FaX
      className="text-red-400 hover:text-red-200 hover:cursor-pointer"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
