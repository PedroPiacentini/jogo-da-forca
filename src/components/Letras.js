import React from 'react'
import Letra from './Letra';

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className={`letras ${props.habilitado ? "habilitado" : ""}`}>
            {alfabeto.map(letra => Letra(letra, props.habilitado))}
        </div>
    )
}