import React from "react";
import ReactDOM from "react-dom";
import iic from './iic.png'
import adaline from './adaline.png'
import testplanner from './test-planner.png'
import './paper-prototype/paper-prototype-css-main/paper-prototype-project.css';

const Projects = ()=>{
    return(
        <div id="projects-section">
            <h2>Projects</h2>
            <div id="projects">
                <div className="project">
                        <img src={iic} alt="iic website" height="150px" width="75px"></img>
                        <a href="https://iic.isquareit.edu.in/" target="_blank"><h3>IIC Website</h3></a>
                        <p>I was part of the team which created <br></br>the IIC website<br></br> which is hosted on our college servers right now</p>
                </div>
                <div className="project">
                    
                        <img src={testplanner} alt="iic website" height="150px" width="75px"></img>
                        <a href="" target="_blank"><h3>Test Planner</h3></a>
                        <p>This is a Django project that we created<br></br>for PBL<br></br>This allows creation of user desired <br></br> question sets  based on question banks</p>
                    
                </div>
                <div className="project">
                        <img src={adaline} alt="iic website" height="150px" width="75px"></img>
                        <a href="https://colab.research.google.com/drive/1ggtxriXYPqyg4W84nkC9XQlvubPiVhuw?usp=sharing" target="_blank"><h3>Adaline Algorithm</h3></a>
                        <p>Implemented the Adaline learning algorithm <br></br>from scratch</p>
                </div>
            </div>
        </div>
    );
}

export default Projects
