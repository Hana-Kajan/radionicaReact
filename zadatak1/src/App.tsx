import React,  {FunctionComponent, FC} from "react";
import "./App.css";
import {useState} from "react";

export const App: FC = () => {
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

export default App;
