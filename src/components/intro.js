import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Text from "./text";
import Write from './writeanimation.js';
export default function Intro(props) {
  const [isHide1, setIsHide1] = useState(false);
  const [isHide2, setIsHide2] = useState(false);
  setTimeout(() => {
    setIsHide2(true);
  }, 12000);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHide1(true);
    }, 6000);

    return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
  }, []);

  return (
    <>
    <div id='bg'>
    </div>
    <div className="intro">
      <h1>Adwait Jadhav</h1>
      <p>I'm a</p>
      <div id="type-text">
      {isHide1 ? <Text string="Problem Solver" /> : null}
      {!isHide1 ? <Text string="Creative Thinker" /> : null}
      {isHide2 ? <Write text="Student" delay={125}/> : null}
      </div>
    </div>
    </>
  );
}


