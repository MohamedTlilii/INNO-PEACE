import React from "react";
import "./Style.css";
import { CiFacebook, CiInstagram, CiLinkedin, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <div className="footerHome">
        <img
          src="/assets/inooo2.jpg"
          alt=""
          style={{ width: "150px", border: "1px solid #0a0a0a37",cursor:"pointer" }}
        />
        {/* <h3>Home</h3> */}
        <p>What we do</p>
        <p>Missions</p>
        {/* <p>Where we work</p> */}
      </div>

      <div className="footerProjects">
        <h3>Projects</h3>
        <p>La Bibliothèque Humaine</p>
        <p>Awledna Zen (Awzen)</p>
        <p>Euromed</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
      </div>
      <div className="footerAbout">
        <h3>About</h3>
        <p>INNO-PEACE</p>
        <CiFacebook style={{ fontSize: "30px" }} />
        <CiInstagram style={{ fontSize: "30px" }} />
        <CiLinkedin style={{ fontSize: "30px" }} />
      </div>

      <div className="footerContacts">
        <h3>Contact us </h3>
        <div className="contactsSocial">
          <MdOutlineEmail />

          <p>
            <a href="mailto:board.innopeace@gmail.com">
              board.innopeace@gmail.com
            </a>
          </p>
        </div>
        <div className="contactsSocial">
          <CiPhone />

          <p> +216 24 313 242</p>
        </div>
        <div className="contactsSocial">
          <FiMapPin />

          <p>51,Rue Abou Alwalid Ibn Roched Riadh Landalous 2058 Ariana</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
