import React from 'react';
import { Container } from "react-bootstrap";
import { EDUCATION_TITLE, DEGREES } from '../../utils/constants';
import './Resume.css';

const Education = () => {
    return (
        <Container fluid>
            <h1 className="resume-heading">
                <strong>{EDUCATION_TITLE}</strong>
            </h1>
            {DEGREES.map((degree, index) => (
                <div className="resume-item" key={index}>
                    <div className="timeline-circle"></div>
                    <div className="resume-content">
                        <h3>{degree.title}</h3>
                        <p className="resume-date">{degree.date}</p>
                        <p className="resume-institution">{degree.institution}</p>
                        <p className="resume-details">{degree.details}</p>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default Education;
