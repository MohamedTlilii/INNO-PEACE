import React from "react";
import "./Style.css";
import { CiFacebook, CiInstagram, CiLinkedin, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerHome">
        <img
          src="/assets/inooo2.jpg"
          alt=""
          style={{
            width: "150px",
            border: "1px solid #0a0a0a37",
            cursor: "pointer",
          }}
        />
        {/* <h3>Home</h3> */}
        <p>What we do</p>
        <p>Missions</p>
        {/* <p>Where we work</p> */}
      </div>

      <div className="footerProjects">
        <h3>Projects</h3>
        <Link className="link-footer" to="/labibliothequehumaine">
          <p>La Bibliothèque Humaine</p>
        </Link>
        <Link className="link-footer" to="/awlednaZen">
          <p>Awledna Zen (Awzen)</p>
        </Link>
        <Link className="link-footer" to="/euromed">
          <p>Euromed</p>
        </Link>
        <Link className="link-footer" to="/finamena">
          <p>Fina Mena</p>
        </Link>
        <Link className="link-footer" to="/generationp">
          <p>Generation P</p>
        </Link>
        <Link className="link-footer" to="/innoGovacademy">
          <p>InnoGov Academy</p>
        </Link>
        {/* 
        <Link to="/7">
        <p>7</p> 
                </Link>

        */}
      </div>
      <div className="footerAbout">
        <h3>About</h3>
        <Link className="link-footer" to="/about">
        <p>INNO-PEACE</p>
        </Link>
        <a
          href="https://www.facebook.com/Innopeace.Tunisia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiFacebook style={{ fontSize: "30px" }} />
        </a>
        <a
          href="https://www.instagram.com/inno.peace"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiInstagram style={{ fontSize: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/innopeace/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin style={{ fontSize: "30px" }} />
        </a>
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
          <FiMapPin style={{ fontSize: "30px" }} />

          <p>51,Rue Abou Alwalid Ibn Roched Riadh Landalous 2058 Ariana</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
