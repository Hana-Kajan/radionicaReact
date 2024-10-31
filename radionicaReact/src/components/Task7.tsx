import React,  {FunctionComponent, FC} from "react";
import {useState, useRef} from "react";

export const Task7: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
      inputRef.current?.focus();
    };
  
  
    return (
        <div>
        <input ref={inputRef} type="text" placeholder="Unesi tekst" />
        <button onClick={handleFocus}>Fokusiraj se na input</button>
      </div>
    );
  };
  
  export default Task7;
  export {};
