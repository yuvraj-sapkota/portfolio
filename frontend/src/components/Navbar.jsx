import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");

  return (
    <>
      <div className="max-w-[1300px] mx-auto mt-[20px] mb-[40px]">
        <ul className="flex justify-between items-center p-[10px] text-xl text-white mx-auto bg-[#171717] rounded-[82px]">
          <li
            className={`py-[20px] px-[40px]  rounded-4xl  cursor-pointer  ${
              isActive === "home" ? " bg-[#FD853A]" : ""
            }`}
            onClick={() => setIsActive("home")}
          >
            Home
          </li>
          <li
            className={`py-[20px] px-[40px]  rounded-4xl  cursor-pointer  ${
              isActive === "about" ? " bg-[#FD853A]" : ""
            }`}
            onClick={() => setIsActive("about")}
          >
            About
          </li>
          <li
            className={`py-[20px] px-[40px]  rounded-4xl  cursor-pointer  ${
              isActive === "service" ? " bg-[#FD853A]" : ""
            }`}
            onClick={() => setIsActive("service")}
          >
            service
          </li>
          <li className="py-[20px] px-[90px]  rounded-4xl  cursor-pointer border border-[#FD853A] borderbg ">
            Yuvraj
          </li>
          <li
            className={`py-[20px] px-[40px]  rounded-4xl  cursor-pointer  ${
              isActive === "resume" ? " bg-[#FD853A]" : ""
            }`}
            onClick={() => setIsActive("resume")}
          >
            Resume
          </li>
          <li
            className={`py-[20px] px-[40px]  rounded-4xl  cursor-pointer  ${
              isActive === "project" ? " bg-[#FD853A]" : ""
            }`}
            onClick={() => setIsActive("project")}
          >
            Project
          </li>
          <li
            className={`py-[20px] px-[40px]  rounded-4xl  cursor-pointer  ${
              isActive === "contact" ? " bg-[#FD853A]" : ""
            }`}
            onClick={() => setIsActive("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
