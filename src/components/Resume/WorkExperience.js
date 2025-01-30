import React from 'react';
import { Container } from "react-bootstrap";
import { WORK_EXPERIENCE, PROFESSIONAL_EXPERIENCE_TITLE } from '../../utils/constants';
import './Resume.css';

const WorkExperience = () => {
    return (
        <Container fluid>
            <h1 className="resume-heading">
                <strong>{PROFESSIONAL_EXPERIENCE_TITLE}</strong>
            </h1>
            {WORK_EXPERIENCE.map((experience, index) => (
                <div className="resume-item" key={index}>
                    <div className="resume-content">
                        <h3>{experience.role}</h3>
                        <p className="resume-date">{experience.date}</p>
                        <p className="resume-institution">{experience.company}</p>
                        <span className="resume-location">{experience.location}</span>
                        <ul className="resume-details">
                            {experience.responsibilities.map((responsibility, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: responsibility }}></li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default WorkExperience;