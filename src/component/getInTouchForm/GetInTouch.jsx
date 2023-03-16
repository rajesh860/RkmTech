import React from "react";
import { Select } from "antd";
import mail from "../../lotties/mail.json";
import "./styles.scss";
import Lottie from "react-lottie";
const GetInTouch = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const option = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
    {
      value: "disabled",
      label: "Disabled",
      disabled: true,
    },
  ];
  const option2 = [
    {
      value: "jack",
      label: "10k",
    },
    {
      value: "lucy",
      label: "40k",
    },
    {
      value: "Yiminghe",
      label: "50k",
    },
    {
      value: "disabled",
      label: "1L",
    },
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mail,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="form-container">
        <div className="form-col">
          <div className="mail">
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
          <h1>Get In Touch</h1>
          <div className="top">
            <div className="left-col">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
              <label htmlFor="">What You Are Intrested</label>
              <Select
                defaultValue="Design & Branding"
                style={{
                  width: 350,
                  border: "none",
                  height: 35,
                }}
                onChange={handleChange}
                options={option}
              />
            </div>
            <div className="right-col">
              <label htmlFor="">Your Email</label>
              <input type="text" placeholder="Your Email" />
              <label htmlFor="">Project Budget</label>
              <Select
                defaultValue="Project Budget"
                style={{
                  width: 350,
                  border: "none",
                  height: 35,
                }}
                onChange={handleChange}
                options={option2}
              />
            </div>
          </div>
          <div className="bottom">
            <label htmlFor="">Describe Your Require</label>
            <textarea
              name=""
              id=""
              cols="88"
              rows="10"
              placeholder="Describe Your Require"
            ></textarea>
          </div>
        </div>
        {/* <div className="top">
          
        </div> */}
      </div>
    </>
  );
};

export default GetInTouch;
