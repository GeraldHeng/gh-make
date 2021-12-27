import Image from "next/image";

const StackImages = ({ mainImage, iconImage }) => {
  return (
    <div className="relative z-0 ">
      <div className="absolute bg-white z-10 w-20 h-20 shadow-lg rounded-xl p-1">
        <Image
          src={iconImage}
          width={20}
          height={20}
          layout="responsive"
          objectFit="contain"
          alt="screenshot"
        />
      </div>
      <div className="absolute inset-0 z-0 m-8">
        <div className="rounded-xl shadow-lg">
          <Image
            src={mainImage}
            width="100%"
            height={50}
            layout="responsive"
            objectFit="contain"
            alt="screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export default StackImages;
