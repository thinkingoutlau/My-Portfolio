import React from "react";
import projects from "../projects";

const Projects = () => {
  return (
    <div className="projects">
      <h2>
        <u>Projects</u>
      </h2>
      <div className="project">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <h3>{project.title}</h3>
              <div>
                <i>{project.description}</i>
              </div>
              <div>
                <a target="_blank" href={project.link}>
                  {project.link}
                </a>
              </div>
              <div>
                {project.title === "Nook's Cranny" ? (
                  <video
                    src="/AnimalCrossing.mp4"
                    controls
                    width="700"
                    height="400"
                  ></video>
                ) : (
                  ""
                )}
              </div>
              <br />
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
