import ToDoForm from './components/ToDoForm';
import ToDoListShow from './components/ToDoListShow';
import './App.css';
import { useState } from 'react';

function App() {
  //Destructure this useState into my form. Then pass it from App down to my ToDoShow compnent to be rendered.
  const [toDoList, setToDoList] = useState([])
  return (
    <div className='App'>
      <ToDoForm toDoList = {toDoList} setToDoList = {setToDoList}/>
      <ToDoListShow toDoList = {toDoList} setToDoList = {setToDoList}/>
    </div>
  );
}

export default App;
