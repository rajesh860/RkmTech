import React from "react";
import ButtonComponent from "../button/Button";
import SevicessCard from "./SevicessCard";
import "./styles.scss";
const OurRangeServices = () => {
  return (
    <>
      <div className="our-client-heading section-2">
        <div className="heading-col col-2">
          <h1> Our range of services </h1>
          <p>
            We pride ourselves on building successful, end to end web and mobile
            applications.
          </p>
        </div>
      </div>
      <div className="services-card-container">
        <div className="services-col">
          <SevicessCard />
        </div>
      </div>
      <div className="view-more-btn">
        <ButtonComponent btn="View Detail" />
      </div>
    </>
  );
};

export default OurRangeServices;
