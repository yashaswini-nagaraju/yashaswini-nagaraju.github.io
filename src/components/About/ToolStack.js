import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
} from "react-icons/si";

const toolStackData = [
  { icon: <SiMacos />, name: "Mac OS" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
];

const ToolStack = () => {
  return (
    <Row style={{ justifyContent: "center" }}>
      {toolStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <p>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
};

export default ToolStack;
