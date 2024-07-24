
import Mugshot from "../assets/Mugshot.jpg";
import React from "react";
import './css/about.css';

function About() {
  return (
    <div className="container">
      <div className="row">
        <img src={Mugshot} alt = "photo of me" className="mugshot col col-4"></img>
        <h3 className="about_font col col-8"> Hi, welcome to my portfolio! I am currently working as a veterinary assistant in Livermore, California. Although I received my B.S.in Biology from UC Riverside,
        coding has always been a thing that fascinated me. I took a couple classes for a year while I was getting my bachelors, and had always planned to eventually do more with coding. I currently just finished a coding 
        bootcamp course from UC Berkeley, which puts me at the starting line as a junior full-stack software engineer for Javascript. If I am able to start a career in this field, I would like to eventually go into cybersecurity.  </h3>
      </div>
    </div>
  );
}

export default About;