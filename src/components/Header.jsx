import React from "react";

const Header = () => {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-3 fixed top-0 z-20 bg-paletteGreen9">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a className="flex items-center gap-2" href="/">
          <img
            className="w-9 h-9 object-contain"
            src="src/assets/github profile-fotor.png"
            alt="Profile Picture"
          />
          <p className="text-[20px] text-white font-bold cursor-pointer flex">
            PARKER OBERG
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-6">
          <li className="text-white text-[20px] font-medium">
            <a href="#about">About</a>
          </li>
          <li className="text-white text-[20px] font-medium">
            <a href="#work">Work</a>
          </li>
          <li className="text-white text-[20px] font-medium">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-white text-[20px] font-medium">
            <a href="src/assets/Resume - Parker Oberg.pdf">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
