import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import WorkSection from "../components/works/WorkSection";
import Divider from "../components/commons/Divider";
import Footer from "../components/footer/Footer";
import Button from "../components/commons/Button";
import { scrollTo } from "../utils/scrollTo";

export default function Home() {
  const buttonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
  };

  const goToTop = () => {
    scrollTo({ id: "home" });
  };
  return (
    <div>
      <HeroSection id="home">
        <Navbar />
      </HeroSection>
      <AboutSection id="about" />
      <div className="flex justify-center py-8">
        <Divider />
      </div>
      <WorkSection id="works" />
      <Footer />
      <div style={buttonStyle} onClick={goToTop}>
        <Button>Go to Top</Button>
      </div>
    </div>
  );
}
