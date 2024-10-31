import React,  {FunctionComponent, FC} from "react";
import {useState, useEffect} from "react";

export const Task5: FC = () => {
    const [title, setTitle] = useState<string>("Početni naslov");

  useEffect(() => {
    document.title = title;
  }, [title]);
  
    return (
        <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Unesi naslov"
        />
      </div>
    );
  };
  
  export default Task5;