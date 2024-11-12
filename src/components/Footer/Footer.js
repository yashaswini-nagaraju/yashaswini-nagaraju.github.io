import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import { DEVELOPER_NAME, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL, FACEBOOK_URL } from "../../utils/constants";

const Footer = () => {
    const year = new Date().getFullYear();

    const socialLinks = [
        {
            href: LINKEDIN_URL,
            icon: <FaLinkedinIn />,
        },
        {
            href: GITHUB_URL,
            icon: <AiFillGithub />,
        },
        {
            href: INSTAGRAM_URL,
            icon: <AiFillInstagram />,
        },
        {
            href: FACEBOOK_URL,
            icon: <AiFillFacebook />,
        },
    ];

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by {DEVELOPER_NAME}</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        {socialLinks.map((link, index) => (
                            <li key={index} className="social-icons">
                                <a
                                    href={link.href}
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
