import React from "react";
import HeroData from "../../HeroData ";
import "./Style.css";

function About() {
  return (
    <div className="aboutSectionSolo">
      <div>
        <h1>{HeroData[0].title}</h1>
        <p>{HeroData[0].description}</p>
        {/* <p>{HeroData[0].vision}</p> */}
      </div>
      <div>
        <h1>QUATRE MISSIONS :</h1>
        {HeroData[0].quatremissions.map((mission, index) => (
          <p key={index}>{mission.mission}</p>
        ))}
      </div>
      <div>
        <img src={HeroData[0].image} alt="" style={{ width: "500px" }} />
      </div>
    </div>
  );
}

export default About;
