import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Image Background Remover",
    description: "It can  remove background from the image by putting image in the remover section.",
    link: "https://imagesbackgroundremover.netlify.app/",
    source: "https://github.com/Sudhanshu336/image-background-remover", 
    image: "/image_logo.png" 
  },
  {
    title: "Property Rental Website",
    description: "It is basically a frontend site of property rental website using reactjs which can show all the details of different different properties.",
    link: "https://propertys-rental.netlify.app/",
    source: "https://github.com/Sudhanshu336/property-rental",
    image: "/property_logo.png"
  },
  {
    title: "Virtual Assistant",
    description: "A virtual assistant using html , css and javascript which can do noraml task and real time task also.",
    link: "https://voice-assistantpro.netlify.app/",
    source: "https://github.com/Sudhanshu336/Voice-assistant",
    image: "/virtual_logo.png"
  },
  {
    title: "Todo List web",
    description: "A todo list website using reactjs along with local storage in which we can add our task , delete our task and mark them after they will done . We can also edit our tasks.",
    link: "https://todotask-list-app.netlify.app/",
    source: "https://github.com/Sudhanshu336/todo-list-web",
    image: "/todo.png"
  }
];

const Work = () => {
  return (
    <div className="work-container" id="work">
      <h2 className="work-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
            <div className="button-group">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;