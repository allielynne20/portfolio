import React, { useState } from "react";
import Projects from "../Projects";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Run-Buddy",
      description: "blahhhhhhh",
      deployed: "https://www.blink182.com/",
      repo: "https://www.blink182.com/",
    },
    {
      name: "Book-Club",
      description: "blahhhhhhh",
      deployed: "https://www.blink182.com/",
      repo: "https://www.blink182.com/",
    },
    {
      name: "girl_code website",
      description: "blahhhhhhh",
      deployed: "https://girl-code-project.herokuapp.com/",
      repo: "https://github.com/carolinacez/WomenInTech.git",
    },
  ]);

  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        {projects.map((selectedProject, i) => {
          <Projects selectedProject={selectedProject} key={`projects${i}`} />
        })}
      </div>
    </div>
  );
}

export default Portfolio;
