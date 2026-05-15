import { Link } from 'react-router-dom';
import { useState } from "react";

function Pratica({ que, cor }) {

    const [texto, setTexto] = useState("come minha bunda seu policial");
    let nome = "desgraça";
    const UrlImg = "src/imagem/Imagem colada.png";
    const [inputTexto, setInputTexto] = useState("");

    function clicou() {
        setTexto(inputTexto);
    }

    return (
        <div>

            <h1 style={{ color: cor }}>
                {texto}
            </h1>

            <input
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                type="text"
            />

            <h2>
                me chama de lord {nome}, por favor {texto}
            </h2>

            <Link to="/sobre">Ir para a página Sobre</Link>

            <img width={500} src={UrlImg} />

            <br />

            <button onClick={clicou}>
                toque no meu botao
            </button>

        </div>
    );
}

export default Pratica;