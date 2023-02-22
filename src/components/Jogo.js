
export default function Jogo(props) {
    return (
        <div className="jogo">
            <img src="assets/forca0.png" />
            <button onClick={props.funcao}>Escolher Palavra</button>
        </div>
    );
}
