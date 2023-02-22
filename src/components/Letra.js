export default function Letra(letra, habilitado) {
    letra = letra.toUpperCase();
    if (!habilitado) {
        return (
            <button disabled><p>{letra}</p></button>
        )
    }
    return (
        <button onClick={() => console.log("click na letra")}><p>{letra}</p></button>
    )
}
