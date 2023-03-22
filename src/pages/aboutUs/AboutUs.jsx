import React from "react";
import AboutSectionComponent from "../../component/abboutSection1/AboutSectionComponent";
import AboutSection2 from "../../component/aboutSection2/AboutSection2";
import HomeHeaderSlider from "../../component/slider/HomeHeaderSlider";
import Testimonial from "../../component/slider/Testimonial";

const AboutUs = () => {
  return (
    <>
      <HomeHeaderSlider />
      <AboutSectionComponent />
      <AboutSection2 />
      <Testimonial heading="What Clients Say About Us" />
    </>
  );
};

export default AboutUs;
