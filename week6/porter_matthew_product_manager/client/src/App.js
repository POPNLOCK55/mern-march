import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
import './App.css';
import UpdateForm from './components/UpdateForm';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/home' default/>
          <Route element={<Details/>} path='/product/:id'/>
          <Route element={<UpdateForm/>} path='/product/edit/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
