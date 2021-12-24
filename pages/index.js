import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import WorkSection from "../components/works/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-40">
      <HeroSection>
        <Navbar />
      </HeroSection>
      <AboutSection />
      <div className="flex justify-center py-8">
        <Image
          src="/images/section_divider.svg"
          width={1000}
          height={30}
          alt="divider"
        />
      </div>

      <WorkSection />
    </div>
  );
}
