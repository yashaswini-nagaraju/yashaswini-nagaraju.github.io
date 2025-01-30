import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, FACEBOOK_URL } from "../../utils/constants";
import "./SocialLinks.css";

const SocialLinks = () => {
    const socialLinks = [
        { href: LINKEDIN_URL, icon: <FaLinkedinIn />, label: "LinkedIn" },
        { href: GITHUB_URL, icon: <AiFillGithub />, label: "GitHub" },
        { href: FACEBOOK_URL, icon: <FaFacebook />, label: "Facebook" },
        { href: INSTAGRAM_URL, icon: <FaInstagram />, label: "Instagram" },
    ];

    return (
        <div className="social-links">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;