import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teste from './Teste';
import Sobre from './Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teste />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
