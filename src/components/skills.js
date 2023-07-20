import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import resume from "./resume.jpg";

import './paper-prototype/paper-prototype-css-main/paper-prototype.css';
const Skill = ()=>{
    return(
        <div id="skill-section">
            <h2>Skills & Resume</h2>
            <div id="skills">
                
                <div id="resume">
                    <a href={resume} target="_blank"><img src={resume} height="500px" width="400px"></img></a>
                </div>
                <div id="skill">
                    <p>ReactJS</p>
                    <p>Python Django</p>
                    <p>Numpy/Pandas/Matplotlib</p>
                    <p>Machine learning(ScikitLearn)</p>
                    <p>HTML</p>
                    <p>CSS-bootstrap/vanilla</p>
                    <p>OOP</p>
                    <p>MySQL</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;