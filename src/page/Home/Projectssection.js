import React from "react";
import "./Style.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import content from "../../ProjectsData";

function Projectssection() {
  return (
    <div className="projectsSection">
      <h1>Projects</h1>
      <Row xs={1} md={2} className="g-4">
        {content.map((project) => (
          <Col key={project.id}>
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
                <Card.Title className="projectsSectionTitle">
                  {project.title}
                </Card.Title>
                <Card.Text>{project.description1}</Card.Text>
                <Card.Text>{project.description2}</Card.Text>
                <Card.Text>{project.description3}</Card.Text>
                {/* <h5>But:</h5>
                <ul>
                  {project.but.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{project.histoire}</p>
                <h5>Ajourdhui:</h5>
                <ul>
                  {project.ajourdhui.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projectssection;
