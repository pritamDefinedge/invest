import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const eventDate = new Date('May 21, 2025 19:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((difference % (1000 * 60)) / 1000)),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());
    return () => clearInterval(timer);
  }, []);

  const renderTimeUnit = (label: string, value: number) => (
    <div className="flex flex-col items-center justify-center px-2 sm:px-4">
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-300 tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <section className="w-full px-4 py-8 md:py-12 flex justify-center items-center ">
      <div className="w-full max-w-2xl">
       

        <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-5">
          {renderTimeUnit('Days', timeLeft.days)}
          <span className="text-white/40 text-xl sm:text-2xl font-light">:</span>
          {renderTimeUnit('Hours', timeLeft.hours)}
          <span className="text-white/40 text-xl sm:text-2xl font-light">:</span>
          {renderTimeUnit('Minutes', timeLeft.minutes)}
          <span className="text-white/40 text-xl sm:text-2xl font-light">:</span>
          {renderTimeUnit('Seconds', timeLeft.seconds)}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
