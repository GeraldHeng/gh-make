import Image from "next/image";
import Button from "../commons/Button";

const FeatureWorkDetail = ({
  title,
  description,
  tags,
  githubLink,
  externalLink,
  learnMoreLink,
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-primary">Featured Project</p>
      <h3 className="text-primary">{title}</h3>

      <div className="flex gap-4 pb-4">
        {tags.map((tag, i) => (
          <p
            key={i}
            className="text-primary hover:bg-accent-light hover:rounded-full px-2"
          >
            {tag}
          </p>
        ))}
      </div>
      <p className="text-primary pb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-8 h-8">
            <Image
              src="/images/external_link.svg"
              height={24}
              width={24}
              alt="hover_line"
              className="hover:bg-accent-light rounded-full"
            />
          </div>
          <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-8 h-8">
            <Image
              src="/images/github.svg"
              height={24}
              width={24}
              alt="hover_line"
              className="hover:bg-accent-light rounded-full"
            />
          </div>
        </div>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default FeatureWorkDetail;
