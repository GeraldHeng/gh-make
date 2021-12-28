import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import WorkSection from "../components/works/WorkSection";
import Divider from "../components/commons/Divider";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection>
        <Navbar />
      </HeroSection>
      <AboutSection />
      <div className="flex justify-center py-8">
        <Divider />
      </div>
      <WorkSection />
      <Footer />
    </div>
  );
}
