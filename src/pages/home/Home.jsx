import React from "react";
import GetInTouch from "../../component/getInTouchForm/GetInTouch";
import OurClient from "../../component/ourClientSection/OurClient";
import OurClientCard from "../../component/ourClientSection/OurClientCard";
import OurRangeServices from "../../component/ourRangeServicesSection/OurRangeServices";
import HomeHeaderSlider from "../../component/slider/HomeHeaderSlider";
import Testimonial from "../../component/slider/Testimonial";
// import TechStack from "../techStack";

const Home = () => {
  return (
    <div>
      <HomeHeaderSlider />
      <OurClient />
      <OurClientCard />
      <OurRangeServices />

      {/* <section className="our-tech-stack">
        <TechStack />
      </section> */}
      <Testimonial heading="Real words by real people" />

      <GetInTouch />
    </div>
  );
};

export default Home;
