import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut tout le monde ! Je suis <span className="purple">Khaoula Hamadouche</span>{" "}
            d’ <span className="purple">Algérie</span>.
            <br />
            Je travaille actuellement en tant qu’{" "}
            <span className="purple">ingénieure en études et développement.</span> chez {" "}
            <span className="purple">SARPI</span>.
            <br />J’ai étudié à l’Université Alger 1{" "}, où j’ai obtenu un diplôme en <span className="purple">Ingénierie des Systèmes Informatiques Intelligents</span>.
            <br />
            <br />
            En dehors du développement, j’aime m’engager dans des activités qui stimulent ma créativité et m’inspirent :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Développer des projets personnels 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Explorer de nouvelles technologies et frameworks 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire et partager sur des sujets tech ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et découvrir de nouveaux horizons 🌍
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
