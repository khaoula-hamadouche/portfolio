import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* Section des technologies utilisées */}
        {props.techStack && props.techStack.length > 0 && (
          <div style={{ margin: "15px 0" }}>
            <h6 style={{ marginBottom: "10px", color: "#c770f0" }}>
              Technologies utilisées:
            </h6>
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "10px",
              justifyContent: "center"
            }}>
              {props.techStack.map((tech, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 10px",
                    backgroundColor: "rgba(199, 112, 240, 0.1)",
                    borderRadius: "5px",
                    border: "1px solid rgba(199, 112, 240, 0.3)"
                  }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    style={{ 
                      width: "20px", 
                      height: "20px",
                      objectFit: "contain"
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "white" }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;