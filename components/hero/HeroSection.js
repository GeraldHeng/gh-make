import Image from "next/image";

const HeroSection = ({ children, ...rest }) => {
  return <div className="flex flex-col hero">{children}</div>;
};

export default HeroSection;
