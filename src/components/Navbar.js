import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      fixed="top"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* BUTTON HAMBURGER (MOBILE) */}
<Navbar.Toggle
  aria-controls="responsive-navbar-nav"
  onClick={() => setExpanded(expanded ? false : "expanded")}
  style={{ color: "#8e44ad", fontSize: "26px", border: "none" }}
>
  {expanded ? "✖" : "☰"}
</Navbar.Toggle>






        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                <AiOutlineHome /> Accueil
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                <AiOutlineUser /> À propos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projets
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument /> Résumé
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/khaoula-hamadouche/portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork /> <AiFillStar />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
