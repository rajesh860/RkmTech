import React from "react";
import Card from "../card/abbouSectionCard/Card";
import "./styles.scss";
import { SiHiveBlockchain } from "react-icons/si";
import { BiChip } from "react-icons/bi";
import Card2 from "../card/abbouSectionCard/Card2";
const AboutSection2 = () => {
  const data = [
    {
      para: "Our Mission is seeing businesses growing with our skills & efforts Which makes us more happy is that a business which was associated with us and shows a growth that makes us more motivated to do so",
      heading: "Our Mission",
      img: <SiHiveBlockchain />,
    },
    {
      para: "Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident.",
      heading: "Our Vision",
      img: <BiChip />,
    },
  ];

  return (
    <div>
      <div className="about-section-container-2">
        <div className="about-left-col-2">
          <h1>Make Your Business More Competitive And Enduring</h1>
          {data.map((culrem) => {
            return (
              <Card
                heading={culrem.heading}
                para={culrem.para}
                img={culrem.img}
              />
            );
          })}
        </div>
        <div className="about-right-col-2">
          <div className="card-left-col">
            <Card2 bg="#24995d" cardDeatail="Project Completed" no={3840} />
            <Card2 bg="#cae5fe" cardDeatail="Customer Support" no={340} />
          </div>
          <div className="card-right-col">
            <Card2 bg="#c0fedc" cardDeatail="Team Members" no={380} />
            <Card2 bg="#fbc7ba" cardDeatail="Happy Clients" no={840} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
