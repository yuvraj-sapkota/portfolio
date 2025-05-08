import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-[1300px] mx-auto mt-[10px] mb-[25px] px-2">
      {/* Toggle Button only for small screens */}
      <div className="lg:hidden flex justify-end mb-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-[#171717] p-2 rounded-full"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Original Navbar — now responsive */}
      <ul
        className={`flex flex-col md:flex-row justify-between items-center p-[10px] text-base md:text-xl text-white bg-[#171717] rounded-[82px] transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <li
          className={`py-[10px] px-[20px] rounded-4xl cursor-pointer ${
            isActive === "home" ? "bg-[#FD853A]" : ""
          }`}
          onClick={() => setIsActive("home")}
        >
          Home
        </li>
        <li
          className={`py-[10px] px-[20px] rounded-4xl cursor-pointer ${
            isActive === "about" ? "bg-[#FD853A]" : ""
          }`}
          onClick={() => setIsActive("about")}
        >
          About
        </li>
        <li
          className={`py-[10px] px-[20px] rounded-4xl cursor-pointer ${
            isActive === "service" ? "bg-[#FD853A]" : ""
          }`}
          onClick={() => setIsActive("service")}
        >
          Service
        </li>
        <li className="py-[10px] px-[90px] rounded-4xl cursor-pointer border border-[#FD853A]">
          Yuvraj
        </li>
        <li
          className={`py-[10px] px-[20px] rounded-4xl cursor-pointer ${
            isActive === "resume" ? "bg-[#FD853A]" : ""
          }`}
          onClick={() => setIsActive("resume")}
        >
          Resume
        </li>
        <li
          className={`py-[10px] px-[20px] rounded-4xl cursor-pointer ${
            isActive === "project" ? "bg-[#FD853A]" : ""
          }`}
          onClick={() => setIsActive("project")}
        >
          Project
        </li>
        <li
          className={`py-[10px] px-[20px] rounded-4xl cursor-pointer ${
            isActive === "contact" ? "bg-[#FD853A]" : ""
          }`}
          onClick={() => setIsActive("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
