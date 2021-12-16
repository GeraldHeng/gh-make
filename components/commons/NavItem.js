import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function NavItem({ children, active = false, ...rest }) {
  const [style, setStyle] = useState("invisible");

  return (
    <div
      {...rest}
      className="flex flex-col items-center"
      onMouseEnter={() => {
        setStyle("");
      }}
      onMouseLeave={() => {
        setStyle("invisible");
      }}
    >
      <div
        className={`w-1 h-1 bg-pale-white rounded-full ${
          active ? "active" : "invisible"
        }`}
      />
      <a
        href=""
        className="px-2 py-0 font-medium text-pale-white rounded transition duration-300"
      >
        {children}
      </a>
      <div className={`flex text-pale-white ${style}`}>
        <Image
          src="/images/hover_line.svg"
          height={5}
          width={70}
          alt="hover_line"
        />
      </div>
    </div>
  );
}
