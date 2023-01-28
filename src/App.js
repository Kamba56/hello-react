import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
