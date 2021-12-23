import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/commons/about/AboutSection";

export default function Home() {
  return (
    <div className="pb-40">
      <HeroSection>
        <Navbar />
      </HeroSection>
      <AboutSection />
    </div>
  );
}
