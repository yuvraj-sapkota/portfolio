import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {};
  return (
    <>
      <div className="W-[1300PX]  px-[70px] mt-[40px] mb-[40px]">
        <div className=" text-white mx-auto bg-[#171717] rounded-[82px]">
          <div>
            <ul className="flex justify-between items-center p-[10px] text-xl ">
              <li
                className={`py-[20px] px-[40px]  rounded-4xl  ${
                  isActive ? " bg-[#FD853A]" : ""
                }`}
              >
                Home
              </li>
              <li
                className={`py-[20px] px-[40px]  rounded-4xl  ${
                  isActive ? " bg-[#FD853A]" : ""
                }`}
              >
                About
              </li>
              <li className="py-[20px] px-[40px]  rounded-4xl  ">service</li>
              <li className="py-[20px] px-[90px]  rounded-4xl  ">Yuvraj</li>
              <li className="py-[20px] px-[40px]  rounded-4xl  ">Resume</li>
              <li className="py-[20px] px-[40px]  rounded-4xl  ">Project</li>
              <li className="py-[20px] px-[40px]  rounded-4xl  ">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
