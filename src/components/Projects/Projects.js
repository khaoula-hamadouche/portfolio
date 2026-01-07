import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// Import des icônes de technologies
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import angular from "../../Assets/TechIcons/angular.svg";
import springboot from "../../Assets/TechIcons/spring-boot-icon.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Laravel from "../../Assets/TechIcons/laravel.svg";
import Php from "../../Assets/TechIcons/php.svg";
import Drupal from "../../Assets/TechIcons/drupal.svg";
import Html from "../../Assets/TechIcons/html.svg";
import Css from "../../Assets/TechIcons/css.svg";
import Scss from "../../Assets/TechIcons/sass.svg";
import Xamp from "../../Assets/TechIcons/xampp.svg";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
           Voici quelques projets sur lesquels j'ai travaillé récemment
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TOSYS APP"
              description="Est une plateforme web développée pour SARPI visant à moderniser la gestion des utilisateurs. Elle facilite l'administration des comptes AD/Exchange, réduit les tâches manuelles grâce à l'automatisation et assure une gestion sécurisée et traçable des opérations."
              ghLink="https://github.com/khaoula-hamadouche/TosysApp"
              techStack={[
                { name: "React", icon: ReactIcon },
                { name: "Javascript", icon: Javascript },
                { name: "MySQL", icon: SQL },
                { name: "Tailwind", icon: Tailwind },
                { name: "Material UI", icon: MUI },
                { name: "Laravel", icon: Laravel },
                { name: "Css", icon: Css },

              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CME APP"
              description="Vise à moderniser les processus de gestion des marchés via une plateforme web intelligente, en centralisant les dossiers, en automatisant les tâches récurrentes et en soutenant la prise de décision grâce à un module d'intelligence artificielle."
              ghLink="https://github.com/khaoula-hamadouche/Cmeapp"
              techStack={[
                { name: "Angular", icon: angular },
                { name: "Spring Boot", icon: springboot },
                { name: "MySQL", icon: SQL },
                { name: "Java", icon: Java },
                { name: "Material UI", icon: MUI },
                { name: "Scss", icon: Scss },
                { name: "Css", icon: Css },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CND APP"
              description="Est une plateforme dédiée aux soudeurs et contrôleurs non destructifs, visant à digitaliser et centraliser le suivi des opérations de contrôle, à automatiser certaines tâches et à améliorer la traçabilité et la fiabilité des inspections."
              ghLink="https://github.com/khaoula-hamadouche/CndApp"
              techStack={[
                { name: "React", icon: ReactIcon },
                { name: "Javascript", icon: Javascript },
                { name: "MySQL", icon: SQL },
                { name: "Tailwind", icon: Tailwind },
                { name: "Material UI", icon: MUI },
                { name: "Laravel", icon: Laravel },
                { name: "Css", icon: Css },
                
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GMAT APP"
              description="Est une plateforme dédiée à la gestion du matériel et de la maintenance, visant à centraliser les équipements, planifier les opérations de maintenance, automatiser les tâches courantes et assurer un suivi fiable et traçable des interventions."
              ghLink="https://github.com/khaoula-hamadouche/GmatApp"
              techStack={[
                { name: "React", icon: ReactIcon },
                { name: "Typescript", icon: Typescript },
                { name: "MySQL", icon: SQL },
                { name: "Tailwind", icon: Tailwind },
                { name: "Material UI", icon: MUI },
                { name: "Laravel", icon: Laravel },
                { name: "Css", icon: Css },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Gestion courrier Algérie Télécom"
              description="Est une plateforme qui centralise la réception et l'envoi des courriers au sein de l'entreprise, facilite leur suivi et optimise la gestion interne de l'ensemble des envois."
              ghLink="https://github.com/khaoula-hamadouche/gestion_courrier/tree/main/PFE"
              techStack={[
                { name: "Php", icon: Php },
                { name: "MySQL", icon: SQL },
                { name: "Css", icon: Css },
                { name: "Html", icon: Html },
                { name: "Xamp", icon: Xamp },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Portail Sarpi"
              description="Est une plateforme centralisée qui permet d'accéder aux informations de chaque département de la société SARPI, 
              facilitant la consultation, le suivi et la gestion interne des données."
              ghLink="https://github.com/khaoula-hamadouche"
              techStack={[
                { name: "Drupal", icon: Drupal },
                { name: "Css", icon: Css },
                
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;