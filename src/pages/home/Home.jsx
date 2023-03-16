import React from "react";
import GetInTouch from "../../component/getInTouchForm/GetInTouch";
import OurClient from "../../component/ourClientSection/OurClient";
import OurClientCard from "../../component/ourClientSection/OurClientCard";
import OurRangeServices from "../../component/ourRangeServicesSection/OurRangeServices";
import HomeHeaderSlider from "../../component/slider/HomeHeaderSlider";
import Testimonial from "../../component/slider/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeHeaderSlider />
      <OurClient />
      <OurClientCard />
      <OurRangeServices />
      <Testimonial />

      <GetInTouch />
    </div>
  );
};

export default Home;
