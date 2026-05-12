import { useState } from "react";
function Pratica({ que }) {
    const [Texto, SetTexto] = useState("come minha bunda seu policial")
    let nome = "desgraça"
    const UrlImg = "src/imagem/Imagem colada.png"

    return (
        <div>
            <h1>me chama de lord {nome} </h1>
            <img width={500} src={UrlImg} />
            <button onClick={() => setTexto("toquei no meu butao")} />
        </div>
    )
}

export default Pratica