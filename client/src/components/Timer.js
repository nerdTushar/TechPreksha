import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  });

  function getTimeRemaining() {
    const now = new Date();
    const target = new Date('April 03. 2023 00:00:00');
    const timeDiff = target.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
    <div className='flex flex-col md:gap-10 mb-4 gap-2'>
      <span className='flex md:text-3xl text-2xl gap-5 justify-between'>
      <p>Days &nbsp; </p>
      <p>Hours &nbsp;</p>
      <p>Minutes &nbsp;</p>
      <p>Seconds &nbsp;</p>
      </span>
     <span className='flex text-5xl'>
     <h1>{timeRemaining.days} &nbsp;: &nbsp;</h1>
      <h1>{timeRemaining.hours} &nbsp;: &nbsp;</h1>
      <h1>{timeRemaining.minutes}&nbsp;: &nbsp; </h1>
      <h1>{timeRemaining.seconds} </h1>
     </span>
    </div>
    </>
  );
}

export default Timer;