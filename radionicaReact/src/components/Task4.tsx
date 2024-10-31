import React,  {FunctionComponent, FC} from "react";
import {useState, useEffect} from "react";

export const Task4: FC = () => {
    const [count, setCount]=useState<number>(0);

    useEffect(()=> {
        console.log("Vrijednost stanja se promjenila.");
    }, [count]);
    
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Povecaj</button>
      </div>
    );
  };
  
  export default Task4;