import React,  {FunctionComponent, FC} from "react";
import {useState, useEffect} from "react";

export const Task3: FC = () => {
    useEffect(()=> {
        console.log("Komponenta je renderovana prvi put.");
    }, []);
    
  
    return (
      <div>
       Pozdrav!
      </div>
    );
  };
  
  export default Task3;