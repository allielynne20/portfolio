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
          <li>Proficient in Microsoft Office Applications</li>
          <li>Strong understanding of Computers and multiple pieces of technology
          </li>
          <li>Proficient in multiple coding languages.</li>
          <li>Strong Communication Skills</li>
          <li>Highly Motivated</li>
          <li>Able to work independently and with others</li>
          <li>A quick study</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
