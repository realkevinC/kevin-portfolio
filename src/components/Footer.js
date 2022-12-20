import React from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target = 'blank' rel='noreferrer' href='https://www.linkedin.com/in/kevin-chen-069b71181/'>
        <BsLinkedin />
        </a>
        <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC'>
        <BsGithub />
        </a>
        <a href="mailto:kevinchen1688@yahoo.com"><MdEmail />
        </a>
      </div>
      <p> &copy; Kevin Chen</p>
    </div>
  );
}

export default Footer;