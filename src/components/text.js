import React, { useState, useEffect } from 'react';
import Write from './writeanimation.js';
import Remove from "./remove";
const Text = (props) => {
    const { string } = props;
    const [isHide1, setIsHide1] = useState(false);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => setIsHide1(true), 3500);
  
      return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
    }, []);
  
    return (
      <p>
        {!isHide1 ? <Write text={string} delay={125} /> : <Remove text={string} delay={125} />}
      </p>
    );
  };
  

export default Text;