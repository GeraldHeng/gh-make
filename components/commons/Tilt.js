import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Tilt = ({ rotation = 10, timing = 150, children }) => {
  const [isTilted, setIsTilted] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isTilted ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
    // transition: `transform ${timing}ms`,
  });

  useEffect(() => {
    if (!isTilted) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsTilted(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isTilted, timing]);

  const trigger = () => {
    console.log("trigger");
    setIsTilted(true);
  };

  return (
    // <span onMouseEnter={trigger} style={style}>
    //   {children}
    // </span>
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Tilt;
