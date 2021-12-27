import Image from "next/image";

const Divider = ({ width = 1000, height = 30 }) => {
  return (
    <Image
      src="/images/section_divider.svg"
      width={width}
      height={height}
      alt="divider"
    />
  );
};

export default Divider;
