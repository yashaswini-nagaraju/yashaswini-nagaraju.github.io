import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiApachekafka,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import "./Stack.css";

const techStack = [
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
    <Row style={{ justifyContent: "center" }}>
      {techStack.map((tech) => (
        <Col key={tech.name} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <p>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
};

export default TechStack;
