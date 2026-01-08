import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             Ingénieure en études et développement, basée en  <strong>Algérie</strong>.
            <br /> <br />
            J’exerce actuellement chez <strong>SARPI</strong>, où je participe à la conception, au développement et à l’amélioration de solutions informatiques répondant aux besoins opérationnels de l’entreprise.
            <br /> <br />
            <br />Je suis diplômée de l’Université d’Alger 1, titulaire d’un Master 2 en Ingénierie des Systèmes Informatiques Intelligents, avec une spécialisation en intelligence artificielle, Cette formation m’a permis d’acquérir de solides compétences en développement applicatif,
            en analyse des systèmes, ainsi qu’en intégration de techniques d’intelligence artificielle dans des solutions informatiques concrètes. 
            <br />
            <br />
          </p>
        

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
