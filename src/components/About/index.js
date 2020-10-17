import React from 'react';
import bioImage from '../../assets/bioImage.JPG';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={bioImage} className='bioImage' alt='allie'/>
      <div>
        <p>
          My name is Allie! Thank you for visiting my portfolio page. I have
          been learning to code for about six months now through a coding
          bootcamp with the University of Central Florida. I really enjoy
          learning all there is to know about front-end coding, back-end coding,
          and the different languages that come with it. I feel like one should
          learn all their lives and find what makes them happy, and for me, that
          is creating cool webpages.
        </p>
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

export default About;
