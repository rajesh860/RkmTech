import React from "react";
import { img1, img2, img3, img4, img5 } from "../../utils/imports";

const OurClientCard = () => {
  const ourlClientImg = [img1, img2, img3, img4, img5];
  return (
    <>
      <div className="our-client-grid-img">
        <div className="grid-col">
          {ourlClientImg?.map((res) => {
            return <img src={res} alt="" />;
          })}
        </div>
      </div>
    </>
  );
};

export default OurClientCard;
