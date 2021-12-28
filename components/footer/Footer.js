import Image from "next/image";

const Footer = ({ children, ...rest }) => {
  const style = {
    backgroundImage: `url(${"./images/footer_blob.svg"})`,
    width: "70%",
    height: "100%",
    transform: "scale(0.95)",
    objectFit: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex justify-center items-center footer pt-12">
      <div style={style} className="flex flex-col p-36 gap-2">
        <h1 className="text-primary font-black">Hey There!</h1>
        <h4 className="text-primary">
          I am always open up for a chat! <br />
          Drop me an email at geralddevelop@gmail.com or <br />
          contact me via social media.
        </h4>
        <div className="flex gap-2">
          <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-12 h-12">
            <Image
              src="/images/github.svg"
              height={36}
              width={36}
              alt="github link"
              className="hover:bg-accent-light rounded-full"
            />
          </div>
          <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-12 h-12">
            <Image
              src="/images/linkedIn.svg"
              height={36}
              width={36}
              alt="linkedin link"
            />
          </div>
          <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-12 h-12">
            <Image
              src="/images/instagram.svg"
              height={36}
              width={36}
              alt="instagram link"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute z-10"> */}
      {/* <Image
          src="/images/footer_blob.svg"
          width={650}
          height={500}
          objectFit="contain"
          alt="blob"
        />
      </div>
      <div className="absolute z-20">
        <h3 className="text-primary font-black">Hey There!</h3>
        <p className="text-primary font-black">
          I am always open up for a chat! <br />
          Drop me an email at geralddevelop@gmail.com or <br />
          contact me via social media.
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
