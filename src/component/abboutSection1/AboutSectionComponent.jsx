import React from "react";
import Lottie from "react-lottie";
import "./styles.scss";
import htmlLottie from "../../lotties/html.json";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
const AboutSectionComponent = () => {
  const option = {
    loop: true,
    autoplay: true,
    animationData: htmlLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="about-section-container">
        <div className="left-col-about-section">
          <Lottie options={option} height="100%" width="100%" />
        </div>
        <div className="right-col-about-section">
          <h1>We Help Businesses to Scale Technical Capacity</h1>
          <p>
            Now a days businesses are facing numerous challenges as every
            business depend for its growth to online. It is somewhere impossible
            for a business owner to be skillful in every part of technology, So
            this is what we Understand & Believe in Supporting businesses &
            create an environment for them to grow with full force.
          </p>
          <div className="ul-list">
            <ul>
              <li>
                <MdOutlineRadioButtonChecked />
                Advanced caching
              </li>
              <li>
                <MdOutlineRadioButtonChecked />
                Unlimited applications
              </li>
              <li>
                <MdOutlineRadioButtonChecked />
                PHP 7 ready transfer
              </li>
            </ul>
            <ul>
              <li>
                <MdOutlineRadioButtonChecked /> PHP ready serves
              </li>
              <li>
                <MdOutlineRadioButtonChecked /> 24/7 Free extra support
              </li>
              <li>
                <MdOutlineRadioButtonChecked /> Optimized stack
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSectionComponent;
