import './App.css';
import React,  { useState } from 'react';
import Header from './header';
import data from "./data.json";
import ToDoList from "./ToDoList";


function App() {
  const [ toDoList, setToDoList ]  = useState(data);
  return (
    <div className="App">
   <Header/>
   <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
