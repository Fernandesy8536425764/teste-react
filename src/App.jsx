import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pratica from './Pratica';
import Sobre from './Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pratica />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
