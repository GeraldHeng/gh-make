import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import WorkSection from "../components/works/WorkSection";
import Divider from "../components/commons/Divider";

export default function Home() {
  return (
    <div className="pb-40">
      <HeroSection>
        <Navbar />
      </HeroSection>
      <AboutSection />
      <div className="flex justify-center py-8">
        <Divider />
      </div>
      <WorkSection />
    </div>
  );
}
