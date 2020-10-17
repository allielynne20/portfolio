import React from "react";

function Projects({ selectedProject }) {
  const { name, description, repo, deployed } = selectedProject;
  return (
    <div key={name}>
      <img
        className="project-img"
        src={require(`../../assets/${name}.jpg`)}
        alt=""
      />
      <div className="project-info">
        <p>
          <a href={deployed} className="links">
            Deployed Link:
          </a>
          <a href={repo} className="links">
            Repo Link:
          </a>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Projects;
