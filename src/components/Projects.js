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
              <br />
              <h3>{project.title}</h3>
              <div className="description">
                <p>{project.description}</p>
              </div>
              <div>
                <a target="_blank" href={project.link}>
                  {project.link}
                </a>
              </div>
              <div>
                <a target="_blank" href={project.github}>
                  {project.github}
                </a>
              </div>
              <br />
              <div>
                {project.title === "Optimate" ? (
                  <video
                    src="/Optimate1Minute.mp4"
                    controls
                    className="video"
                  ></video>
                ) : (
                  ""
                )}
                {project.title === "Thinkingoutlau Tutoring Center" ? (
                  <video
                    src="/ThinkingoutlauTutoringCenter.mp4"
                    controls
                    className="video"
                  ></video>
                ) : (
                  ""
                )}
                {project.title === "Nook's Cranny" ? (
                  <video
                    src="/AnimalCrossing.mp4"
                    controls
                    className="video"
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
