import React from 'react';
import "./Intro.css";

function Intro() {
    return (
        <section id="intro">
            <div className="content-wrapper1">
                
                <div className="intro-image">
                    <img src="/profiles.jpg" alt="sudhanshu" />
                </div>

                
                <div className="intro-content">
                    <span className='hello'>Hello, </span>
                    <span className='intro-text'>
                        I'm <span className='introName'>Sudhanshu Rajput</span><br />Full Stack Developer
                    </span>
                    <p className="introPara">
                            I’m a passionate and motivated Full Stack Developer with hands-on experience through personal projects and training. 
                            I enjoy learning new tools and solving real-world problems with code.
                    </p>
                    <a href="sudhanshuresume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;
