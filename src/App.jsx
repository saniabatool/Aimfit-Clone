import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GetFitHome from "./components/GetFitHome";
import OwnStudio from "./components/OwnStudio";
import PricingSection from "./components/PricingSection";
import StudioSection from "./components/StudioSection";
import CommunitySection from "./components/CommunitySection";
import FreeTrialSection from "./components/FreeTrialSection";
import Footer from "./components/Footer";

function App() {
 useEffect(() => {
  AOS.init({
    duration: 600,
    offset: 100,
    once: false,
    mirror: true,
    easing: "ease-out-cubic",
  });
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <GetFitHome />
      <OwnStudio />
      <PricingSection />
      <StudioSection />
      <CommunitySection />
      <FreeTrialSection />
      <Footer />
    </>
  );
}

export default App;