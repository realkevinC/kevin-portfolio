import React from "react";
import {BsGithub, BsLinkedin, BsPersonLinesFill} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";
import resume from "../assets/Kevin-Chen-Resume.pdf"

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
        <a target = 'blank' rel='noreferrer' href= {resume} >
        <BsPersonLinesFill />
        </a>
      </div>
      <p> &copy; Kevin Chen</p>
    </div>
  );
}

export default Footer;