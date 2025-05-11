import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Service", id: "service" },
    { label: "Yuvraj", id: "yuvraj" },
    { label: "Resume", id: "resume" },
    { label: "Project", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="max-w-[1300px] mx-auto mt-[10px] mb-[25px] px-4">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex justify-between items-center py-[10px] px-[10px] text-xl text-white mx-auto bg-[#171717] rounded-[82px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`font-(family-name: sans-serif) py-[10px] px-[20px] rounded-4xl cursor-pointer ${
              isActive === item.id ? "bg-[#FD853A]" : ""
            } ${
              item.id === "yuvraj"
                ? "sm:px-[40px] mg:px-[60px] lg:px-[90px] border border-[#FD853A]"
                : ""
            }`}
            onClick={() => setIsActive(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Mobile Nav Toggle Button */}
      <div className="md:hidden flex justify-between items-center px-4 bg-[#171717] rounded-[82px] text-white py-3">
        <h1 className="text-xl font-semibold">Menu</h1>
        <Menu
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer"
          size={28}
        />
      </div>

      {/* Mobile Fullscreen Nav Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#171717] text-white flex flex-col items-center justify-center z-50">
          <X
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 cursor-pointer"
            size={30}
          />
          <ul className="flex flex-col gap-6 text-2xl">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`py-2 px-6 rounded-xl cursor-pointer ${
                  isActive === item.id ? "bg-[#FD853A]" : ""
                } ${item.id === "yuvraj" ? "border border-[#FD853A]" : ""}`}
                onClick={() => {
                  setIsActive(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
