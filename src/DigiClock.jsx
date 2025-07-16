import React, { useState, useEffect } from 'react';
import './Styles/DigiClock.css';

const DigiClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let merid = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${merid}`;
  };

  const addZero = (num) => (num < 10 ? '0' : '') + num;

  return (
    <div className="digi-clock-wrapper">
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
};

export default DigiClock;
