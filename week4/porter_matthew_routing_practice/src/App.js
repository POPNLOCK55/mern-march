
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/:numWord' element={<Number/>}/>
          <Route path=':numWord/:color' element={<Number/>}/>
          <Route path=':numWord/:color/:bgColor' element={<Number/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
