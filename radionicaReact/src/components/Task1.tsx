import React,  {FunctionComponent, FC} from "react";
import {useState} from "react";

export const Task1: FC = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleCheckboxChange = () => {
      setIsChecked(prevChecked => !prevChecked);
    };
  
    return (
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
  
        <p>{isChecked ? "Checkbox je označen" : "Checkbox nije označen"}</p>
      </div>
    );
  };
  
  export default Task1;