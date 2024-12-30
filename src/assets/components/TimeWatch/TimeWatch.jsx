import React, {
  Fragment,
  useEffect,
  useState,
} from 'react';

const TimeWatch = () => {
  const [time, setTime] = useState({ minute: 0, seconds: 0 });
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        setTime((prev) => {
          const totalSeconds = prev.minute * 60 + prev.seconds + 1;
          return {
            minute: Math.floor(totalSeconds / 60),
            seconds: totalSeconds % 60,
          };
        });
      }, 1000);
    }

    // Cleanup the timer when `start` is false or when component unmounts
    return () => clearInterval(timer);
  }, [start]);

  const handleReset = () => {
    setTime({ minute: 0, seconds: 0 });
    setStart(false); 
  };

  return (
    <Fragment>
      <h1>Stopwatch</h1>
      <p>
        Time: {time.minute}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </p>
      <button onClick={() => setStart((prev) => !prev)}>
        {start ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </Fragment>
  );
};

export default TimeWatch;
