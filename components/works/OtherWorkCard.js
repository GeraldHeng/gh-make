import Image from "next/image";

const OtherWorkCard = ({
  title,
  description,
  tags,
  githubLink,
  externalLink,
  learnMoreLink,
}) => {
  return (
    <div className="relative z-0">
      <div className="flex z-10 bg-accent-light rounded-lg h-80 mt-2 ml-2">
        zzc
      </div>
      <div className="absolute inset-0 z-0 mr-2">
        <div className="flex-1 bg-accent rounded-lg p-2 h-80">
          <Image src="/images/heart.svg" height={72} width={72} alt="heart" />
          <div className="flex gap-4 pb-2">
            <h3 className="text-primary font-black mr-2">{title}</h3>
            <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-8 h-8">
              <Image
                src="/images/external_link.svg"
                height={24}
                width={24}
                alt="external link"
                className="hover:bg-accent-light rounded-full"
              />
            </div>
            <div className="flex justify-center items-center hover:bg-accent-light rounded-full w-8 h-8">
              <Image
                src="/images/github.svg"
                height={24}
                width={24}
                alt="github link"
                className="hover:bg-accent-light rounded-full"
              />
            </div>
          </div>
          <div className="flex gap-2 pb-4">
            {tags.map((tag, i) => (
              <p key={i} className="text-primary text-xs">
                {tag}
              </p>
            ))}
          </div>
          <p className="text-primary pb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default OtherWorkCard;
