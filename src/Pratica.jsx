import { useState } from "react";
import imgUrl from "/src/imagem/Imagem colada.png";

function Pratica() {
  const [texto, setTexto] = useState("comece a digitar...");
  const [inputTexto, setInputTexto] = useState("");

  function clicou() {
    if (inputTexto.trim()) {
      setTexto(inputTexto);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      clicou();
    }
  }

  return (
    <div className="page">
      <div className="container page-section">
        <div className="home-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              Projeto React
            </div>
            <h1 className="hero-title">
              Bem-vindo ao <span className="gradient-text">Pratica</span>
            </h1>
            <p className="hero-subtitle">
              Uma aplicação React moderna com design sofisticado. Explore os componentes e descubra uma experiência visual única.
            </p>

            <div className="interactive-card glass-card">
              <div className="card-title">Texto dinâmico</div>
              <div className="display-text">
                {texto}
              </div>
              <div className="input-group">
                <input
                  className="input-field"
                  value={inputTexto}
                  onChange={(e) => setInputTexto(e.target.value)}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Digite algo..."
                />
                <button className="btn btn-primary" onClick={clicou}>
                  Enviar
                </button>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              width={500}
              src={imgUrl}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pratica;
