import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { PROJECTS_TITLE, PROJECTS } from "../../utils/constants";
import "./Projects.css";

const Projects = () => (
  <Container className="project-container">
    <h1 className="project-heading">
      <strong>{PROJECTS_TITLE}</strong>
    </h1>
    <Row className="project-row">
      {PROJECTS.map((project, index) => (
        <Col md={4} className="project-card" key={index}>
          <ProjectCard
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
