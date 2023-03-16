import React from "react";
import customer1 from "../../img/customer1.png";
import customer2 from "../../img/customer2.png";
import customer3 from "../../img/customer3.png";
import customer4 from "../../img/customer4.png";
import customer5 from "../../img/customer5.svg";

const OurClientCard = () => {
  const ourlClientImg = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer1,
    customer2,
    customer3,
  ];
  return (
    <>
      <div className="our-client-grid-img">
        <div className="grid-col">
          {ourlClientImg.map((res) => {
            return <img src={res} alt="" />;
          })}
        </div>
      </div>
    </>
  );
};

export default OurClientCard;
