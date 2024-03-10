import React from "react";
import "./Style.css";
import { CiFacebook, CiInstagram ,CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer">
      <div className="footerHome">
        <h3>Home</h3>
        <p>What we do</p>
        <p>Missions</p>
        <p>Where we work</p>
      </div>

      <div className="footerProjects">
        <h3>Projects</h3>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
      </div>
      <div className="footerAbout">
        <h3>About</h3>
        <p>INNO-PEACE</p>
      </div>

      <div className="footerContacts">
        <h3>Contacts</h3>
        <p>Work with us</p>
        <p> Partner with us</p>
        <p> Contact us</p>
        <CiFacebook />
        <CiInstagram />
        <CiLinkedin />
      </div>
    </div>
  );
}

export default Footer;
