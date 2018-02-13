import React, { Component } from "react";
import "./Projects.css";
import GenericCrudComponent from "../Utils/GenericCrudComponent";
import ProjectCard from "./ProjectCard";
import EditGenericCard from "./EditGenericCard";

class ProjectsComponent extends Component {
  render() {
    return (
      <div className="projects">
        <h1>PROJECTS</h1>
        <GenericCrudComponent
          thingName={"Project"}
          URL_Ext={"projects"}
          inObjectExt={"project"}
        >
          <ProjectCard />
          <EditGenericCard />
        </GenericCrudComponent>
      </div>
    );
  }
}

export default ProjectsComponent;
