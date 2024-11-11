import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiTypescript,
  SiApachekafka,
} from "react-icons/si";

const techStackData = [
  { icon: <DiJava />, name: "Java" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <DiGit />, name: "Git" },
];

const TechStack = () => {
  return (
    <Row style={{ justifyContent: "center"}}>
      {techStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <p>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
};

export default TechStack;
