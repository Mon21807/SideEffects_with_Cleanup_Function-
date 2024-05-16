import React, { useEffect } from 'react';

const TimerComponent = () => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('Timer expired');
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <div>Timer Component</div>;
};

export default TimerComponent;
