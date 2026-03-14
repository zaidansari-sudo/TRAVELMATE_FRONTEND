import Cta from "@/components/Home/Cta";
import CuratedExperiences from "@/components/Home/Curatedexperiences";
import FeaturedTerritories from "@/components/Home/Featured";
import HeroSection from "@/components/Home/HeroSection";
import HiddenGems from "@/components/Home/Hiddengems";
import TravelerStories from "@/components/Home/Travelstories";
import WhyUs from "@/components/Home/Whyus";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import React from "react";

const Page = () =>{
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HiddenGems/>
      <CuratedExperiences/>
      {/* <WhyUs/> */}
      <FeaturedTerritories/>
      <TravelerStories/>
      <Cta/>
      <Footer/>
    </div>
  );
};

export default Page;