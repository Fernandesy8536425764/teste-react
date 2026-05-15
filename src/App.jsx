import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pratica from './Pratica';
import Sobre from './Sobre';

function App() {
  return (
    <BrowserRouter>
      <div className="ambient-bg">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="grid-overlay" />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Pratica />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
