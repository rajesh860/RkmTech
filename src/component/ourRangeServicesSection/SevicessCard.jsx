import React from "react";
import animationData from "../../lotties/web.json";
import appDevelopment from "../../lotties/app.json";
import digital from "../../lotties/digital.json";
import Ecommerce from "../../lotties/commerce.json";
import content from "../../lotties/content.json";
import Ui from "../../lotties/ui.json";
import Lottie from "react-lottie";
const SevicessCard = () => {
  const option = [
    animationData,
    appDevelopment,
    digital,
    Ecommerce,
    content,
    Ui,
  ];
  const lottify = option?.map((res) => {
    return {
      loop: true,
      autoplay: true,
      animationData: res,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  });
  const lottifyName = [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "E-Commerce",
    "Content Writer",
    "UI/UX Design",
  ];
  const para = [
    "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
    "We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions.",
    "We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions.",
    "We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions.",
    "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
    "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
  ];
  return (
    <>
      {lottify?.map((res, index) => {
        return (
          <div className="card">
            <Lottie options={res} height={150} width={150} />
            <h4>{lottifyName[index]}</h4>
            <p>{para[index]}</p>
          </div>
        );
      })}
    </>
  );
};

export default SevicessCard;
