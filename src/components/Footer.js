import React from "react";

import "../styles/Footer.css";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target = 'blank' rel='noreferrer' href='https://www.linkedin.com/in/kevin-chen-069b71181/'>
        <LinkedIn />
        </a>
        <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC'>
        <GitHub />
        </a>
        <a href="mailto:kevinchen1688@yahoo.com"><Email />
        </a>
      </div>
      <p> &copy; Kevin Chen</p>
    </div>
  );
}

export default Footer;