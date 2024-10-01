import Link from "next/link";
import { FaHouse, FaTicket } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHouse className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="icon" />
        </Link>
      </div>
      <div className="">
        <p className="text-default-text">jake@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
