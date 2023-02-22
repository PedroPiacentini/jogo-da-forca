import palavras from "../palavras";

function selecionaPalavra() {
    const indice = Math.floor(Math.random() * (palavras.length + 1));
    return palavras[indice].split("");
}

const palavra = selecionaPalavra();

export default function Jogo(props) {
    return (
        <div className="jogo">
            <img src="assets/forca0.png" />
            <div>
                <button disabled={props.habilitado} onClick={props.funcao}>Escolher Palavra</button>
                <div>
                    {props.habilitado ? palavra.map((letra, indice) => indice !== palavra.length - 1 ? "_ " : "_") : ""}
                </div>
            </div>
        </div>

    );
}
