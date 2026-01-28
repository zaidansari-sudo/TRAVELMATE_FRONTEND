import Cta from "@/components/Home/Cta";
import CuratedExperiences from "@/components/Home/Curatedexperiences";
import FeaturedTerritories from "@/components/Home/Featured";
import HeroSection from "@/components/Home/HeroSection";
import HiddenGems from "@/components/Home/Hiddengems";
import TravelerStories from "@/components/Home/Travelstories";
import WhyUs from "@/components/Home/Whyus";

import React from "react";

const Page = () =>{
  return (
    <div>
      <HeroSection/>
      <HiddenGems/>
      <CuratedExperiences/>
      <WhyUs/>
      <FeaturedTerritories/>
      <TravelerStories/>
      <Cta/>
    </div>
  );
};

export default Page;