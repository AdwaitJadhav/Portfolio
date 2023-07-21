import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [years, setYears] = useState(0);

  const deadline = "June 30, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setYears(Math.floor(time / 31556952000));
    const remainingTime = time - years*31556952000;
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    setDays(remainingDays);
    setHours(Math.floor((remainingTime / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((remainingTime / (1000 * 60)) % 60));
    setSeconds(Math.floor((remainingTime / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="graduation">
      <div className="timer" role="timer">
       <p>Time until graduation<br/><span>approx...</span> </p>
        <br/>      
        <p id="years">{years < 10 ? "0" + years : years}</p>
        <p id="day">{days < 10 ? "0" + days : days}</p>
        <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
      </div>
      <div id="text-time">
        <p className="time-text">Years</p>
        <p className="time-text">Days</p>
        <p className="time-text">Hours</p>
        <p className="time-text">Minutes</p>
        <p className="time-text">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
