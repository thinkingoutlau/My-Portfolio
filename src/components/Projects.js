import React from "react";
import projects from "../projects";

const Projects = () => {
  console.log(projects);
  return (
    <div className="projects">
      <h2>
        <u>Projects</u>
      </h2>
      <br />
      <div className="project">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <div>
                <h3>{project.title}</h3>
              </div>
              <div>{project.description}</div>
              <div>{project.link}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
