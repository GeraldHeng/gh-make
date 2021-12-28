import Image from "next/image";
import Button from "../commons/Button";
import FeatureWorkDetail from "./FeatureWorkDetail";
import OtherWorkCard from "./OtherWorkCard";
import StackImages from "./StackImages";

const WorkSection = ({ children, ...rest }) => {
  const works = [
    {
      title: "Daises by DDS",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      mainImage: "/images/daisies_main.png",
      iconImage: "/images/daisies_icon.png",
      githubLink: "",
      learnMore: "",
    },
    {
      title: "Daises by WOO",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      mainImage: "/images/daisies_main.png",
      iconImage: "/images/daisies_icon.png",
      githubLink: "",
      learnMore: "",
    },
    {
      title: "Daises by WOO",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      mainImage: "/images/daisies_main.png",
      iconImage: "/images/daisies_icon.png",
      githubLink: "",
      learnMore: "",
    },
  ];

  const otherWorks = [
    {
      title: "Daises by DDS",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      mainImage: "/images/daisies_main.png",
      iconImage: "/images/daisies_icon.png",
      githubLink: "",
      learnMore: "",
    },
    {
      title: "Daises by WOO",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      mainImage: "/images/daisies_main.png",
      iconImage: "/images/daisies_icon.png",
      githubLink: "",
      learnMore: "",
    },
    {
      title: "Daises by WOO",
      tags: ["Nuxt JS", "Styled Component", "Website"],
      description:
        "We updated and redesigned their existing brand and created a new marketing website to increase their professionalism and credibility.",
      link: "https://daisiesbydds.com/",
      mainImage: "/images/daisies_main.png",
      iconImage: "/images/daisies_icon.png",
      githubLink: "",
      learnMore: "",
    },
  ];

  return (
    <div className="md:px-28 px-12 md:py-12 py-8">
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
        <div className="flex flex-col gap-36 px-20">
          {works.map((work, i) => (
            <div key={i}>
              <div className="grid grid-cols-2 gap-16">
                <FeatureWorkDetail
                  title={work.title}
                  description={work.description}
                  tags={work.tags}
                />
                <StackImages
                  mainImage={work.mainImage}
                  iconImage={work.iconImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="flex justify-center text-primary pt-32 pb-20">
        {otherWorks.length} other Works.
      </h2>
      <div className="grid grid-cols-3 gap-16">
        {otherWorks.map((work, i) => (
          <OtherWorkCard
            key={i}
            title={work.title}
            description={work.description}
            tags={work.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
