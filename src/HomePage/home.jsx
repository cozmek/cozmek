import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";
import AboutUs from "../components/aboutUs";
import SlideSelection from "../components/SlideSelection";
import Whatyouwillget from "../components/whatyouwillget"
import Footer from "../components/footer";
import Youtube from "../components/youtube";
import Contactus from "../components/contactus";
import WorkingWith from "../components/workingWith";
import Counts from "../components/counts";
import Testimonals from "../components/testimonals";

const Home = () => {
  return (
    <div className="">
      <AddressBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <SlideSelection />
      <Whatyouwillget/>
      <WorkingWith />
      <Youtube/>
      <Counts />
      <Testimonals/>
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
