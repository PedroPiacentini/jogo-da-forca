import React from 'react'
import Letra from './Letra';


export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className='letras'>
            {alfabeto.map((letra) => <Letra imagem={props.imagem} setImagem={props.setImagem} letra={letra} habilitado={props.habilitado} palavra={props.palavra} underline={props.underline} setUnderline={props.setUnderline} setEstadoJogo={props.setEstadoJogo} estadoJogo={props.estadoJogo} />)}
        </div>
    )
}

