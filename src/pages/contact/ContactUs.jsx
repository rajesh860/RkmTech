import React from "react";
import ContactUsCard from "./ContactUsCard";
import Mail from "../../img/mail.svg";
import Whtsapp from "../../img/whtsapp.svg";
import address from "../../img/address.svg";
import "./styles.scss";
import GetInTouch from "../../component/getInTouchForm/GetInTouch";
const ContactUs = () => {
  const img = [Mail, Whtsapp, address];
  const width = ["48.8%", "48.8%", "100%"];
  const mail = [
    "hi@rkmtech.com",
    "India:(+91) 86786786678",
    "Plot No. 115, Sector 44, Gurgaon, Haryana - 122002",
  ];
  const para = ["Mail us (Preferred)", "Office Phone", "Office Address"];
  const locationLink = [
    "",
    "",

    "https://www.google.com/maps/@28.6130176,77.2440064,12z",
  ];

  return (
    <div>
      <div className="contact-us-container">
        <div className="contact-us-col">
          <div className="contact-us-haeding">
            <h1>Let’s work together</h1>
            <p>
              We are excited to take on your new project and help you build
              something amazing!
            </p>
          </div>
          <div className="card-col">
            {para.map((res, index) => {
              return (
                <ContactUsCard
                  width={width[index]}
                  img={img[index]}
                  mail={mail[index]}
                  para={res}
                  location={locationLink[index]}
                />
              );
            })}
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default ContactUs;
