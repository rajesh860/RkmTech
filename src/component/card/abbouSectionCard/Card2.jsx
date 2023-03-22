import React from "react";

const Card2 = ({ cardDeatail, bg, no }) => {
  return (
    <>
      <div className="count-card" style={{ backgroundColor: `${bg}` }}>
        <h3>{no}</h3>
        <p>{cardDeatail}</p>
      </div>
    </>
  );
};

export default Card2;
