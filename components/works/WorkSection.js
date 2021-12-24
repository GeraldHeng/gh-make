import Image from "next/image";
import Tilt from "../commons/Tilt";
import Button from "../commons/Button";

const WorkSection = ({ children, ...rest }) => {
  const works = [
    {
      title: "Daises by DDS",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      githubLink: "",
      learnMore: "",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:px-40 px-12 md:py-12 py-8 gap-12">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-primary">Featured Works.</h2>
          <Image
            src="/images/title_line.svg"
            height={6}
            width={125}
            alt="hover_line"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
