import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiIntellijidea,
} from "react-icons/si";
import "./Stack.css";

const toolStackData = [
  { icon: <SiMacos />, name: "Mac OS" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiIntellijidea />, name: "IntelliJ" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
];

const ToolStack = () => {
  return (
    <Row style={{ justifyContent: "center" }}>
      {toolStackData.map((tech) => (
        <Col key={tech.name} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <p>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
};

export default ToolStack;
