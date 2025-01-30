import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Projects.css";

const ProjectCard = ({ imgPath, title, description, ghLink }) => (
  <Card className="project-card-view">
    <Card.Img variant="top" src={imgPath} alt="card-img" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className="card-text-justify">
        {description}
      </Card.Text>
      <div className="button-container">
      <Button variant="primary" href={ghLink} target="_blank">
        <BsGithub /> &nbsp; GitHub
      </Button>
      <Button variant="primary" target="_blank">
        <FaTools /> &nbsp; TechStack
      </Button>
      </div>
    </Card.Body>
  </Card>
);

ProjectCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
};

export default ProjectCard;
