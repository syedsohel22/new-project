import { useState, useEffect } from "react";
import "./Timer.css"; // Import CSS file for styling

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const futureDate = new Date("2024-05-01").getTime(); // Future date for example
      const distance = futureDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const milliseconds = Math.floor(distance % 1000);

      setTime({ days, hours, minutes, seconds, milliseconds });

      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
      }
    }, 10); // Update every 10 milliseconds for smoother animation

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>I will be back in </h1>
      <div className="timer">
        <div className="timer-item">
          <span>{time.days < 10 ? `0${time.days}` : time.days}</span>
          <span>Days</span>
        </div>
        <div className="timer-item">
          <span>{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
          <span>Hours</span>
        </div>
        <div className="timer-item">
          <span>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="timer-item">
          <span>{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
          <span>Seconds</span>
        </div>
        <div className="timer-item">
          <span>
            {time.milliseconds < 100
              ? `0${time.milliseconds}`
              : time.milliseconds}
          </span>
          <span>Milliseconds</span>
        </div>
      </div>
    </>
  );
};

export default Timer;
