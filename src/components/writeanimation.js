import React, { useState, useEffect } from 'react';
let flag=0;
const Write = ({ text, delay }) =>{
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
         if (currentIndex < text.length && flag==0) {
           const timeout = setTimeout(() => {
             setCurrentText(prevText => prevText + text[currentIndex]);
             setCurrentIndex(prevIndex => prevIndex + 1);
           }, delay);
          
           return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);
      
    return <span>{currentText}</span>;
}


export default Write;