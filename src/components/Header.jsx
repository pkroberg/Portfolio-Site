import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img
              src="src/assets/github profile-fotor.png"
              alt="Profile Picture"
            />
            <p>Parker Oberg</p>
          </a>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="src/assets/Resume - Parker Oberg.pdf">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
