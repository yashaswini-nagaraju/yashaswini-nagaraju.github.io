import React from "react";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineFileText } from "react-icons/ai";
import "./Navbar.css";

const NavBar = () => {
  const navItems = [
    { to: "/", icon: AiOutlineHome, label: "Home" },
    { to: "/about", icon: AiOutlineUser, label: "About" },
    { to: "/projects", icon: AiOutlineProject, label: "Projects" },
    { to: "/resume", icon: AiOutlineFileText, label: "Resume" }
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = () => setIsExpanded(false);

  const navLinks = navItems.map(({ to, icon: Icon, label }) => (
    <Nav.Item key={to}>
      <Nav.Link as={Link} to={to} onClick={handleNavClick}>
        <Icon className="nav-icon" /> {label}
      </Nav.Link>
    </Nav.Item>
  ));

  return (
    <Navbar
      expanded={isExpanded}
      fixed="top"
      expand="md"
      className={isScrolled ? "navbar-sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* These spans are used for the hamburger icon */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey={window.location.pathname}>
            {navLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
