import Image from "next/image";
import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/commons/Button";
import Tilt from "../components/commons/Tilt";
import AboutSection from "../components/commons/about/AboutSection";

export default function Home() {
  const content = {
    name: "Hi I am Gerald Heng!",
    title:
      'I <span class="text-accent">design and build</span> things for the internet.',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et leo nunc. Nulla consequat lorem non volutpat pulvinar. Maecenas vestibulum lacus nec dui gravida, ut molestie orci placerat. Morbi at ex congue, tincidunt quam malesuada",
  };

  return (
    <div className="pb-40">
      <HeroSection>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-40 px-12 md:pt-20 pt-8 gap-12">
          <div className="flex flex-col justify-center col-span-2">
            <h4>{content.name}</h4>
            <h1
              className="font-black"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p>{content.description}</p>
          </div>
          <div className="flex justify-center col-span-1 order-first md:order-last">
            <Image
              src="/images/happy_face.svg"
              height={280}
              width={280}
              alt="happy face"
            />
          </div>
        </div>
      </HeroSection>
      <AboutSection />
    </div>
  );
}
