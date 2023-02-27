export default function Jogo(props) {
    const palavra = props.palavra;
    let exibido = "";
    if (props.estadoJogo !== "jogando") {
        exibido = palavra.join(" ");
    }
    if (palavra === props.underline) {
        exibido = props.underline.join(" ");
    }
    return (
        <div className="jogo">
            <img data-test="game-image" src={`assets/forca${props.imagem}.png`} />
            <div>
                <button data-test="choose-word" disabled={props.habilitado} onClick={props.funcao}>Escolher Palavra</button>
                <div className={props.estadoJogo}>
                    <span data-test="word">{props.habilitado && props.estadoJogo === "jogando" ? props.underline.join(" ") : exibido}</span>
                </div>
            </div>
        </div>

    );
}
