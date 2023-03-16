import React from "react";
import { Link } from "react-router-dom";

const ContactUsCard = ({ img, mail, para, width, location }) => {
  return (
    <div className="contact-us-card" style={{ width: `${width}` }}>
      <div className="icon">
        <img src={img} alt="" />
      </div>
      <h3>{para}</h3>
      <p>{mail}</p>
      {location ? <Link to={location}> View map Location</Link> : ""}
    </div>
  );
};

export default ContactUsCard;
