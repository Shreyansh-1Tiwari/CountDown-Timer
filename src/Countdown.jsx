import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Countdown = ({initialTime , onTimeFinish}) => {
    const [time , setTime] = useState(initialTime);
    const[isRunning , setIsRunning] = useState(false);
    const intervalReference = useRef();

    useEffect(() => {
        if(isRunning){
            intervalReference.current = setInterval(() => {
                setTime((prevTime) => {
                    if(prevTime === 0){
                        clearInterval(intervalReference.current);
                        setIsRunning(false);

                        if(onTimeFinish){
                            onTimeFinish();
                        }

                        return 0;
                    }

                    return prevTime-1;
                });
            },1000);
        }
        else{
            clearInterval(intervalReference.current)
        }

        return () => {
            clearInterval(intervalReference.current);
        };

    },[isRunning , onTimeFinish]);

    const minutes = Math.floor(time/60);
    const seconds = time%60;


    const handleResumeAndPause = () => {
        setIsRunning(prevRunning => !prevRunning);
    }

    const handleReset = () => {
        clearInterval(intervalReference.current);
        setTime(initialTime);
        setIsRunning(false);
    }

    const handleStart = () => {
        setIsRunning(true);
    }

  return (
    <div>
        <div>
            <p>{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</p>
        </div>
        <div>
            <button onClick={handleResumeAndPause}>{isRunning ? 'Pause' : 'Resume'}</button>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  );
};

export default Countdown;
