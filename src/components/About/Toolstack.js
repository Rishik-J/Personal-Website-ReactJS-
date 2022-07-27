import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJenkins,
  SiPostman,
  SiJupyter
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p>Jupyter Notebooks</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p>Jenkins</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
