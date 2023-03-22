import React from "react";

import "./styles.scss";
const Card = ({ para, heading, img }) => {
  return (
    <>
      <div className="container-card">
        <div className="card-left-col">{img}</div>
        <div className="card-right-col">
          <h3>{heading}</h3>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
