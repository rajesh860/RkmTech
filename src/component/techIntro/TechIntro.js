import React from "react";
import { Col, Row } from "antd";

// Styles
import "./styles.scss";
const TechIntro = ({ title, desc }) => {
  return (
    <Row className="stack-intro">
      <Col>
        <h3 className="header-title">{title}</h3>
        <p>{desc}</p>
      </Col>
    </Row>
  );
};

export default TechIntro;
