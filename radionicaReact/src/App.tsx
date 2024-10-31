import React,  {FunctionComponent, FC} from "react";
import "./App.css";
import logo from './logo.svg';
import {useState} from "react";
import {Task1} from "./components/Task1";
import {Task2} from "./components/Task2";
import {Task3} from "./components/Task3";
import {Task4} from "./components/Task4";
import {Task5} from "./components/Task5";
import {Task6} from "./components/Task6";
import {Task7} from "./components/Task7";

export const App: FC = () => { 

  return (
    <div>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
    </div>
  );
};

export default App;

