import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../Type/Type";
import SocialLinks from "../SocialLinks/SocialLinks";
import { DEVELOPER_NAME } from "../../utils/constants";
import "./Home.css";

const Home = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1>{DEVELOPER_NAME}</h1>
            <p>
              I'm <span><Type /></span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
