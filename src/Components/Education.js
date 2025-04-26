import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className="education-wrapper">
      <h1 className="main-heading">Education</h1> 
      <div className="education-container">
        
        <div className="education-box left-box">
          <h2 className="heading">B.Tech in Computer Science And Engineering</h2>
          <p className="subtext">2021 - 2025</p>
          <p className="details">
            Currently pursuing a Bachelor's degree in Computer Science And Engineering with a focus on 
            software development, data structures, and web technologies.
          </p>
        </div>

        
        <div className="education-box right-box">
          <div className="section">
            <h2 className="heading">Senior Secondary</h2>
            <p className="subtext">2019 - 2020</p>
            <p className="details">
              Completed 12th grade with a specialization in Science (PCM). Focused on Mathematics, 
              Physics, and Chemistry . Learn basic c programming additionally.
            </p>
          </div>
          <div className="section">
            <h2 className="heading">Secondary</h2>
            <p className="subtext">2017 - 2018</p>
            <p className="details">
              Completed 10th grade with a strong foundation in Mathematics, Science, and 
              English.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education