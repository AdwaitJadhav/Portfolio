import React from "react";
import Timer from "./graduation";
import iic from './iic.png';
import adaline from './adaline.png';
import testplanner from './test-planner.png';
import './paper-prototype/paper-prototype-css-main/paper-prototype-project.css';

const Projects = () => {
  return (
    <div id="projects-section">
      <h2>Projects</h2>
    
      <div className="blog-card">
        <div className="meta">
          <a href="https://iic.isquareit.edu.in/" target="_blank">
            <div className="photo" style={{ backgroundImage: `url(${iic})` }}></div>
          </a>
          <a href="https://iic.isquareit.edu.in/" target="_blank">
            <div className="details">
              <p>Adwait Jadhav, Om Maind, Datta Zairekar</p>
              <p>December 2022</p>
              <p className="tags">Click to view project</p>
            </div>
          </a>
        </div>
        <div className="description">
          <h1>IIC website</h1>
          <h2>A web development project</h2>
          <p>I was part of the team which created the IIC website which is hosted on our college servers right now</p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <a href="https://colab.research.google.com/drive/1ggtxriXYPqyg4W84nkC9XQlvubPiVhuw?usp=sharing" target="_blank">
            <div className="photo" style={{ backgroundImage: `url(${adaline})` }}></div>
          </a>
          <a href="https://colab.research.google.com/drive/1ggtxriXYPqyg4W84nkC9XQlvubPiVhuw?usp=sharing" target="_blank">
            <div className="details">
              <p>Adwait Jadhav</p>
              <p>2022</p>
              <p className="tags">Click to view project</p>
            </div>
          </a>
        </div>
        <div className="description">
          <h1>Adaline learning algorithm</h1>
          <h2>A Machine learning project</h2>
          <p>Implemented the Adaline learning algorithm from scratch</p>
        </div>
      </div>
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: `url(${testplanner})` }}></div>
          <div className="details">
            <p>Adwait Jadhav, Dhruv Gidwani, Pranit Jadhav, Rushikesh Jamnekar</p>
            <p>2023</p>
          </div>
        </div>
        <div className="description">
          <h1>Test Planner</h1>
          <h2>A Python Django project</h2>
          <p>Created a Python-Django project which allowed faculty to create question sets based on user defined parameters</p>
        </div>
      </div>
      <Timer />
    </div>
  );
};

export default Projects;
