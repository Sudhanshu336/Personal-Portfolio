import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <div className="content-wrapper">
      
        <div className="text-section">
          <h2 className="text-xl font-bold">Hi, I am Sudhanshu Rajput</h2>
          <p>
           A Full stack developer who is work with both frontend and backend technologies.
           I have been working on MERN stack technologies (mongodb,expressjs,react,nodejs) with hands on real time projects and i also have coding experience on core java , c programming along with mysql database. I have interest to make real time projects using both frontend and backend and i like to solve real time problems into coding.
           My full focus to working with these technologies and gain more experience which can help to grow me step by step.


          </p>
        </div>
        
        
        <div className="image-section">
          <img 
            src="/me.jpg" 
            alt="Sudhanshu" 
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
