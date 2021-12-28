import Image from "next/image";
import React, { useState, useEffect } from "react";
import { scrollTo } from "../../utils/scrollTo";

const NavItem = ({ link = null, children, active = false, ...rest }) => {
  const inlineStyle = {
    transition: "opacity 200ms",
  };

  const [style, setStyle] = useState({ opacity: 0 });

  const mouseEnterTrigger = () => {
    setStyle({ opacity: 1 });
  };

  const mouseLeaveTrigger = () => {
    setStyle({ opacity: 0 });
  };

  const onButtonClick = () => {
    scrollTo({ id: link });
  };

  return (
    <button
      {...rest}
      className="flex flex-col items-center"
      onMouseEnter={mouseEnterTrigger}
      onMouseLeave={mouseLeaveTrigger}
      onClick={onButtonClick}
    >
      <div
        className={`w-1 h-1 bg-pale-white rounded-full ${
          active ? "active" : "invisible"
        }`}
      />
      <a className="px-2 py-0 font-medium text-pale-white rounded transition duration-300">
        {children}
      </a>
      <div
        className={`flex text-pale-white`}
        style={{ ...inlineStyle, ...style }}
      >
        <Image
          src="/images/hover_line.svg"
          height={5}
          width={70}
          alt="hover_line"
        />
      </div>
    </button>
  );
};

export default NavItem;
