import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";


import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt="" />
        <p className="text">
          <b>Description: </b> {project.description}
        </p>
        <p className="text">
          <b>Skills:</b> {project.skills}
        </p>
        <div className='icon'>
        <p>
        {project.GitHub}
        </p>
        <p>
        {project.Link}
        </p>
        </div>
      </div>
    );
  }
  
  export default ProjectDisplay;


