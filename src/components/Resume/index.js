import React from "react";
import bioImage from "../../assets/bioImage.JPG";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <section>
      <h2>My Resume</h2>
      <img src={bioImage} className="bioImage" alt="allie" />
      <div>
        <a href={"#" + resume}></a>
        <h3>Proficiencies:</h3>
        <ul>
          <li>Where I'm From: North Carolina</li>
          <li>Favorite Food: Pizza</li>
          <li>
            Favorite Activities: Running, paddle boarding, pretty much anything
            that gets me outside, art, hanging out with my cat Peanut
          </li>
          <li>Favorite Band: Led Zeppelin</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
