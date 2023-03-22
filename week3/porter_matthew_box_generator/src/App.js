import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm.js';
import BoxShow from './components/BoxShow.js';
import { useState } from 'react';

function App() {
  const [boxList, setBoxList] = useState([{
    color : "red",
    height: 150
  }]);
  return (
    <div className="App">
      <BoxForm boxList = {boxList} setBoxList = {setBoxList}/>
      <BoxShow boxList = {boxList}/>
    </div>
  );
}

export default App;
