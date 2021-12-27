import Image from "next/image";
import Button from "../commons/Button";
import FeatureWorkDetail from "./FeatureWorkDetail";
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

      <h2 className="flex justify-center text-primary pt-32 pb-20">6 other Works.</h2>
      <div className="grid grid-cols-3 gap-16">
        {[1, 2, 3, 4, 5, 6].map((e, i) => (
          <div key={i} className="relative z-0">
            <div className="flex z-10 bg-accent-light rounded-lg h-80 mt-2 ml-2">
              zzc
            </div>
            <div className="absolute inset-0 z-0 mr-2">
              <div className="flex-1 bg-accent rounded-lg p-2 h-80">
                <Image
                  src="/images/heart.svg"
                  height={72}
                  width={72}
                  alt="heart"
                />
                <div className="flex gap-4 pb-2">
                  <h3 className="text-primary font-black mr-2">
                    RSAF Scheduler
                  </h3>
                  <Image
                    src="/images/external_link.svg"
                    height={24}
                    width={24}
                    alt="external link"
                    className="hover:bg-accent-light rounded-full"
                  />
                  <Image
                    src="/images/github.svg"
                    height={24}
                    width={24}
                    alt="github link"
                    className="hover:bg-accent-light rounded-full"
                  />
                </div>
                <div className="flex gap-2 pb-4">
                  <p className="text-primary text-xs">Styled Components</p>
                  <p className="text-primary text-xs">Nuxt JS</p>
                  <p className="text-primary text-xs">Web Application</p>
                </div>
                <p className="text-primary pb-4">
                  We updated and redesigned their existing brand and created a
                  new marketing website to increase their professionalism and
                  credibility.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
