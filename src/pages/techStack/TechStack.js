import React from "react";
import { array } from "./data";
import TechStackToWork from "../../component/techStack";
import { Col, Row } from "antd";
import PageIntroHeader from "../../component/pageIntroHeader";

// Styles
import "./styles.scss";
import TechIntro from "../../component/techIntro/TechIntro";
import ButtonComponent from "../../component/button/Button";
const TechStack = () => {
  return (
    <>
      <section className="our-tech-stack">
        <div className="stack-content">
          <div className="container">
            <Row>
              <Col>
                <PageIntroHeader />
              </Col>
            </Row>
          </div>

          {/* App-Development */}
          <div className="web-development">
            {array.map((curlem) => {
              return (
                <div className="container">
                  <TechIntro title={curlem.heading} desc={curlem.des} />
                  <Row>
                    <Col xl={16} lg={16} md={24} sm={24}>
                      <Row className="stack-wrapper">
                        <TechStackToWork techList={curlem.techList} />
                        <Col span={24}>
                          <ButtonComponent btn="View Projects" />
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={8} lg={8} md={24}>
                      <img src={curlem.img} alt="coding.." />
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
