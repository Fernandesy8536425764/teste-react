import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="page">
      <div className="container page-section" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="sobre-card glass-card">
          <div className="avatar">P</div>
          <h1>Sobre o Projeto</h1>
          <p>
            Esta é uma aplicação React construída com Vite, demonstrando componentes modernos, 
            roteamento com React Router e um design visual sofisticado com elementos em vidro 
            e gradientes animados.
          </p>
          <Link to="/" className="btn btn-ghost">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
