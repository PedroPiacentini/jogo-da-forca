export default function Letra(letra, habilitado) {
    return (
        <button disabled={!habilitado} onClick={() => console.log(letra)}><p>{letra.toUpperCase()}</p></button>
    )
}


