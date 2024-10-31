import React,  {FunctionComponent, FC} from "react";
import {useState, useEffect, useRef} from "react";

export const Task6: FC = () => {
    const timerRef = useRef<number>(0);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current += 1;
      setTime(timerRef.current);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return <div>Proteklo vreme: {time} sekundi</div>;
};
  
  export default Task6;