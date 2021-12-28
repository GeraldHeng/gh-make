import Image from "next/image";
import Tilt from "../commons/Tilt";
import Button from "../commons/Button";
import LanguageListItem from "./LanguageListItem";

const AboutSection = ({ children, id,...rest }) => {
  const languages = [
    "Javascript",
    "React",
    "Python",
    "Flutter",
    "Android",
    "Vue",
  ];

  return (
    <div className="grid grid-cols-2 md:px-40 px-12 md:py-12 py-8 gap-12" id={id}>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-primary">About Me.</h2>
          <Image
            src="/images/title_line.svg"
            height={6}
            width={125}
            alt="hover_line"
          />
        </div>

        <div>
          <p className="text-primary">
            Hello! My name is Gerald and I and a undergraduate in Singapore! My
            interest for software sparked back in 2015 where I was tasked to
            create an application for myself in one of my polytechnic module.
            Now I absolutely love creating new things for people and eager to
            take on more projects.
          </p>
          <br />
          <p className="text-primary">
            My main focus these days is to understand the basics of software
            architecture to built long lasting and efficient codebase and been
            experimenting with different backend framework as well.
          </p>
          <br />
          <p className="text-primary">
            Here are the few technologies I am familiar with:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {languages.map((language, i) => (
              <div key={i}>
                <Tilt>
                  <LanguageListItem name={language} />
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src="/images/line_motion.svg"
          height={360}
          width={360}
          alt="happy face"
        />
        <Button>Find Me on Linkedin</Button>
      </div>
    </div>
  );
};

export default AboutSection;
