import React, { useState, useEffect } from 'react';
import Write from './writeanimation.js';
import Remove from "./remove";
const Text = (props) => {
    const { string } = props;
    const [isHide1, setIsHide1] = useState(false);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => setIsHide1(true), 3800);
  
      return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
    }, []);
  
    return (
      <p>
        {!isHide1 ? <Write text={string} delay={140} /> : <Remove text={string} delay={140} />}
      </p>
    );
  };
  

export default Text;
