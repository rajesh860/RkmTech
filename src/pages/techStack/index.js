import React from "react";
import { Content } from "antd/es/layout/layout";

import codingImg from "../../img/coding.svg";
import { Col, Row } from "antd";
import PageIntroHeader from "../../component/pageIntroHeader";
// Styles
import "./styles.scss";
const TechStack = () => {
  const techList = [
    {
      img: require("../../icons/angular.png"),
      name: "Angular",
    },
    {
      img: require("../../icons/react.png"),
      name: "React",
    },
  ];
  return (
    <>
      <section className="our-tech-stack">
        <Content className="stack-content container">
          <Row>
            <Col>
              <PageIntroHeader />
            </Col>
          </Row>

          <Row className="stack-intro">
            <Col>
              <h3 className="header-title">Web Development</h3>
              <p>
                At Squareboat, we design and develop websites and web apps that
                can make sure you’re seen and heard in the right circles.
              </p>
            </Col>
          </Row>

          <Row>
            <Col span={16}>
              <Row className="stack-wrapper">
                <Col span={24}>
                  <div className="tech-holder holder">
                    <div className="title-holder">
                      <img
                        src={require("../../img/front.png")}
                        className="icon"
                        alt="stack-img"
                      />
                      <h4>Backend Development</h4>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="tech-lists">
                    {techList?.map((curElm, i) => {
                      return (
                        <div className="list-item" key={i}>
                          <img
                            src={curElm.img}
                            alt="tech"
                            style={{ height: 40, width: "auto" }}
                            className="icon"
                          />
                          <p>{curElm.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </Col>
                <Col span={24}>
                  <div className="tech-holder holder">
                    <div className="title-holder">
                      <img
                        src={require("../../img/front.png")}
                        className="icon"
                        alt="stack-img"
                      />
                      <h4>Frontend Development</h4>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="tech-lists">
                    {techList?.map((curElm, i) => {
                      return (
                        <div className="list-item" key={i}>
                          <img
                            src={curElm.img}
                            alt="tech"
                            style={{ height: 40, width: "auto" }}
                            className="icon"
                          />
                          <p>{curElm.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <img src={codingImg} alt="coding.." />
            </Col>
          </Row>
        </Content>
      </section>
    </>
  );
};

export default TechStack;
