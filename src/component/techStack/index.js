import { Col } from "antd";
import React from "react";

const TechStackToWork = ({ techList }) => {
  // console.log(, "header");

  return techList.map((res) => {
    return (
      <>
        <Col span={24}>
          <div className="tech-holder holder">
            <div className="title-holder">
              <img src={res?.img} className="icon" alt="stack-img" />
              <h4>{res?.header}</h4>
            </div>
          </div>
          <div className="tech-lists">
            {res?.skills?.map((curlm) => {
              return (
                <div className="list-item">
                  <img
                    src={curlm?.img}
                    alt="tech"
                    style={{ height: 40, width: "auto" }}
                    className="icon"
                  />
                  <p>{curlm?.name}</p>
                </div>
              );
            })}
          </div>
        </Col>
      </>
    );
  });
};

export default TechStackToWork;
