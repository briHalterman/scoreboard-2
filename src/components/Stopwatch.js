import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);

  const handleIsRunningChange = () => { 
    if (!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const handleReset = () => setCount(0);

  return ( 
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{ count }</span>
      <button onClick={handleIsRunningChange}>
        { isRunning ? 'Stop' : 'Start' }
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>    
  );
};

export default Stopwatch;