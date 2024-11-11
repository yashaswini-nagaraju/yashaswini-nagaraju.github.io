import React from "react";
import { Container } from "react-bootstrap";
import { PROJECTS_TITLE } from "../../utils/constants";

const Projects = () => {
    return (
        <Container>
            <Container>
                <h1>
                    <strong>{PROJECTS_TITLE}</strong>
                </h1>
            </Container>
        </Container>
    );
}

export default Projects;
