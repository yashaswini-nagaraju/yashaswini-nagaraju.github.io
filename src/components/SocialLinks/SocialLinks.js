import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => (
    <ul className="social-links">
        <li className="social-icon">
            <a
                href="https://github.com/yashaswini-nagaraju/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
                aria-label="GitHub"
            >
                <AiFillGithub />
            </a>
        </li>
        <li className="social-icon">
            <a
                href="https://www.linkedin.com/in/yashaswini-nagaraju-99116aa6/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
                aria-label="LinkedIn"
            >
                <FaLinkedinIn />
            </a>
        </li>
    </ul>
);

export default SocialLinks;