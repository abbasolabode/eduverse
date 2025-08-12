import Navbar from "../ui/Navbar";
import HeroSection from "../ui/HeroSection";
import ModalClip from "../ui/ModalClip";
import RoundedSection from "../ui/RoundedSection";
import WhyChoosePathways from "../ui/WhyChoosePathways";
import WhatOurStudentSay from "../ui/WhatOurStudentSay";
import ReadyToBeginJourney from "../ui/ReadyToBeginJourney";
import Footer from "../ui/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="w-full min-h-screen mx-auto ">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Hero section */}
      <div className="sm:mt-[6.3rem]">
        <HeroSection />
      </div>
      {/* Overlay modal feature */}
      <div>
        <ModalClip />
      </div>
      {/* Rounded icons */}
      <div>
        <RoundedSection />
      </div>

      {/* WhyChoosePathways */}
      <div>
        <WhyChoosePathways />
      </div>
      {/* WhatOurStudentSay */}
      <div >
        <WhatOurStudentSay />
      </div>
      {/* ReadyToBeginJourney */}
      <div>
         <ReadyToBeginJourney />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </main>
  );
}
