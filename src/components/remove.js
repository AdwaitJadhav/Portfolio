import React, { useState, useEffect } from 'react';
const Remove = ({ text, delay }) =>{
    const [currentText, setCurrentText] = useState(text);
    const [currentIndex, setCurrentIndex] = useState(text.length);
    useEffect(() => {
        if(currentIndex>=0){
            const timeout=setTimeout(()=>{
                setCurrentText(currentText.slice(0,currentIndex));
                setCurrentIndex(currentIndex-1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);
      
    return <span>{currentText}</span>;
}


export default Remove;