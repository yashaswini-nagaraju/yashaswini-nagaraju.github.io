import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import ToolStack from "./ToolStack";
import { JOURNEY_TITLE, TOOLKIT_TITLE, ESSENTIALS_TITLE } from "../../utils/constants";

const About = () => {
  return (
    <Container>
      <Container>
        <h1>
          <strong> {JOURNEY_TITLE} </strong>
        </h1>
        <Row>
          <Col md={7}>
            <AboutCard />
          </Col>
        </Row>
        <h1>
          <strong> {TOOLKIT_TITLE} </strong>
        </h1>

        <TechStack />

        <h1>
          <strong>{ESSENTIALS_TITLE}</strong>
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
}

export default About;
