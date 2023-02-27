export default function Jogo(props) {
    const palavra = props.palavra;
    let exibido = "";
    if (palavra === props.underline) {
        exibido = props.underline.join(" ");
    }
    return (
        <div className="jogo">
            <img src={`assets/forca${props.imagem}.png`} />
            <div>
                <button disabled={props.estadoJogo !== "finalizado" ? props.habilitado : true} onClick={props.funcao}>Escolher Palavra</button>
                <div>
                    {props.habilitado ? props.underline.join(" ") : exibido}
                </div>
            </div>
        </div>

    );
}
