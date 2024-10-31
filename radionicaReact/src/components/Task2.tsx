import React,  {FunctionComponent, FC} from "react";
import {useState} from "react";

export const Task2: FC = () => {  
  const [count, setCount] = useState<number>(0);
  const changeCount = (amount: number) => {
    setCount(prevCount => prevCount + amount);
  };

  return (
    <div>
      <button onClick={() => changeCount(1)}>Dodaj 1</button>
      
      <button onClick={() => changeCount(-1)}>Oduzmi 1</button>

      <button onClick={() => setCount(0)}>Resetiraj</button>

      <p>Trenutna vrijednost brojača: {count}</p>
    </div>
  );
};


export default Task2;
