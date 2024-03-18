import React from "react";
import "./Style.css";
import Card from "react-bootstrap/Card";

import ProjectsData from "../../ProjectsData";

function Euromed() {
  const project = ProjectsData[2];

  return (
    <div className="projectsSectionSolo">
      <h1>{project.title}</h1>
      <Card style={{ height: "550px" }}>
        <Card.Img
          variant="top"
          src={project.image}
          style={{
            width: "700px",
            height: "300px",
            marginLeft: "75px",
            marginTop: "15px",
          }}
        />
        <Card.Body>
          <Card.Title className="projectsSectionTitleSolo">
            {project.title}
          </Card.Title>
          <Card.Text>{project.description1}</Card.Text>
          <Card.Text>{project.description2}</Card.Text>
          <Card.Text>{project.description3}</Card.Text>
          <Card.Text>{project.but}</Card.Text>
          <Card.Text>{project.histoire}</Card.Text>
          <Card.Text>{project.ajourdhui}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Euromed;
