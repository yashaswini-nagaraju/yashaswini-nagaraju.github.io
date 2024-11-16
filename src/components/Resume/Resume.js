import React from "react";
import { Container, Row } from "react-bootstrap";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const Resume = () => {
  return (
    <Container className="resume-container">
      <Row>
        <WorkExperience />
      </Row> 
      <Row>
        <Education />
      </Row>    
    </Container>
  );
};

export default Resume;