import { useState, useEffect } from "react";

export const TimerDisplay = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearTimeout(timer);
  });
  if (!timeLeft) {
    return <h1>Loading...</h1>;
  }
  if (timeLeft?.ended) {
    return;
  }
  return (
    <h3 className="animate__animated animate__flipInX">
      {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
      {timeLeft.seconds} seconds
    </h3>
  );
};


const calculateTimeLeft = (date) => {
  let difference = date - new Date();

  if (difference < 0) {
    return {
      ended: true,
    };
  }

  let timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};

