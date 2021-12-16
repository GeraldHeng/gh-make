import Button from "../commons/Button";
import Tilt from "../commons/Tilt";
import NavItem from "./NavItem";
import React, { useState } from "react";

export default function Navbar({ items, ...rest }) {
  const [style, setStyle] = useState({ opacity: 0 });

  const onHamburgerIconToggled = () => {
    if (style.opacity == 0) {
      setStyle({ opacity: 1 });
    } else {
      setStyle({ opacity: 0 });
    }
  };

  return (
    <nav>
      <div className=" mx-auto px-8 py-4">
        <div className="flex justify-between">
          {/* logo */}
          <div className="flex space-x-7">
            <a href="#" className="flex items-center py-4 px-2">
              <p className="text-pale-white">Logo</p>
              <span className="font-semibold text-pale-white text-lg pl-2">
                GH Make
              </span>
            </a>
          </div>
          {/* logo end */}

          {/* <!-- navbar items --> */}
          <div className="hidden md:flex items-center space-x-3">
            <Tilt>
              <NavItem active={true}>Home</NavItem>
            </Tilt>
            <Tilt>
              <NavItem>About</NavItem>
            </Tilt>
            <Tilt>
              <NavItem>Works</NavItem>
            </Tilt>
            <Tilt>
              <NavItem>Experience</NavItem>
            </Tilt>
            <Button>Contact Me</Button>
          </div>
          {/* <!-- navbar items end --> */}

          {/* <!-- mobile menu button --> */}
          <div
            className="md:hidden flex items-center"
            onClick={onHamburgerIconToggled}
          >
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-pale-white hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      {/* <div className="mobile-menu" style={style}>
        <ul>
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Experience
            </a>
          </li>
        </ul>
      </div> */}
      {/* <!-- mobile menu end --> */}
    </nav>
  );
}
