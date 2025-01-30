import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import TechStack from "../Stack/TechStack";
import ToolStack from "../Stack/ToolStack";
import { JOURNEY_TITLE, TOOLKIT_TITLE, ESSENTIALS_TITLE } from "../../utils/constants";
import profileImg from "../../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container">
      <h1 className="about-heading">
        <strong>{JOURNEY_TITLE}</strong>
      </h1>
      <Row>
        <Col md={7}>
          <AboutCard />
        </Col>
        <Col md={5} className="about-img">
          <img src={profileImg} alt="about" className="img-fluid" />
        </Col>
      </Row>
      <h1 className="about-heading">
        <strong>{TOOLKIT_TITLE}</strong>
      </h1>
      <TechStack />
      <h1 className="about-heading">
        <strong>{ESSENTIALS_TITLE}</strong>
      </h1>
      <ToolStack />
    </Container>
  );
}

export default About;
