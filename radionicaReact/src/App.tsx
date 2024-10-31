import React,  {FunctionComponent, FC} from "react";
import "./App.css";
import logo from './logo.svg';
import {useState} from "react";
import {Task1} from "./components/Task1";
import {Task2} from "./components/Task2";

export const App: FC = () => { 

  return (
    <div>
      <Task1 />
      <Task2 />
    </div>
  );
};

export default App;
