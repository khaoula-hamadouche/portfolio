import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> PRÉSENTATION PERSONNELLE </span><br /> QUI SUIS-JE
            </h1>
            <p className="home-about-body">
              Je suis ingénieure en études et développement, spécialisée dans la conception et la réalisation d’applications web modernes, performantes et évolutives. J’interviens aussi bien sur le backend que sur le frontend, 
              <br />
              <br />
               en utilisant des technologies telles que
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, Angular, React, ainsi que Spring Boot, Laravel, PHP, Java, Python et Django.{" "}
                </b>
              </i>
              <br />
              <br />
               J’ai également un fort intérêt pour les solutions basées sur 
              <i>
                <b className="purple">
                  {" "}
                  l’intelligence artificielle{" "}
                </b>
              </i>
              , notamment pour l’automatisation des processus, l’analyse des données et l’aide à la décision. Rigoureuse et passionnée par l’innovation, je m’attache à développer des applications fiables, sécurisées et orientées vers une excellente expérience utilisateur.
              
            
             
            </p>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
