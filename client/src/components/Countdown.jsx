import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center mx-4">
          <div className="timer-component text-white text-3xl md:text-5xl p-4 rounded-md h-full">
            {timeLeft[interval]}
          </div>
          <div className="text-xl mt-2">
            {interval.charAt(0).toUpperCase() + interval.slice(1)}
          </div>
        </div>
      );
    }
  });

  return (
    <div id="recruitment" className="countdown-container pt-12 mt-12">
      <h1 className="text-8xl font-light mb-10 text-gray-400">Recruitment</h1>
      <div className="flex justify-center items-center mb-8">
        {Object.keys(timeLeft).length === 0 ? (
          <span>Recruitment has ended!</span>
        ) : (
          timerComponents
        )}
      </div>
      {Object.keys(timeLeft).length > 0 && (
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc2kqx8m78SiusHS6bZB5r8IZqaZ_tBK0MVk9orrpSKM421GA/viewform"
            target="_blank"
            className="bg-orange-500 text-white py-2 px-16 rounded-full 
          hover:bg-orange-600 transform hover:scale-105 glow-on-hover w-48"
          >
            Apply
          </a>
        </div>
      )}
    </div>
  );
};

export default Countdown;
