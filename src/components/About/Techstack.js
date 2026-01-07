import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import angular from "../../Assets/TechIcons/angular.svg";
import springboot from "../../Assets/TechIcons/spring-boot-icon.svg";
import flutter from "../../Assets/TechIcons/flutter.svg";
import django from "../../Assets/TechIcons/django-logo-icon.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Laravel from "../../Assets/TechIcons/laravel.svg";
import Php from "../../Assets/TechIcons/php.svg";
import Drupal from "../../Assets/TechIcons/drupal.svg";
import Html from "../../Assets/TechIcons/html.svg";
import Css from "../../Assets/TechIcons/css.svg";
import Scss from "../../Assets/TechIcons/sass.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="html" height={20} width={20}/>
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="css" height={20} width={20}/>
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Drupal} alt="drupal" height={20} width={20}/>
        <div className="tech-icons-text">Drupal</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Scss} alt="scss"height={20} width={40} />
        <div className="tech-icons-text">SCSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Laravel} alt="laravel" height={20} width={20}/>
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Php} alt="php" height={25} width={40}/>
        <div className="tech-icons-text">PHP</div>
      </Col>
    
     

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <img src={springboot} alt="Spring Boot" height={20} width={20} />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
     <img src={angular} alt="Angular" height={20} width={20} />
     <div className="tech-icons-text">Angular</div>
    </Col>
 <Col xs={4} md={2} className="tech-icons">
  <img src={flutter} alt="flutter" height={30} width={30} />
  <div className="tech-icons-text">Flutter</div>
</Col>

    <Col xs={4} md={2} className="tech-icons">
     <img src={django} alt="Django" height={30} width={50} />
     <div className="tech-icons-text">Django</div>
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

   
    </Row>
  );
}

export default Techstack;
