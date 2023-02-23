import React from "react";
export default function Letra(props) {
    const [letraHabilitada, setLetraHabilitada] = React.useState(!props.habilitado);
    console.log(props.habilitado, letraHabilitada)
    return (
        < button className={`${!props.habilitado ? "" : (letraHabilitada ? "habilitado" : "")}`
        } disabled={!props.habilitado ? true : !letraHabilitada} onClick={() => {
            console.log(props.letra);
            setLetraHabilitada(false);
        }}>
            <p>
                {props.letra.toUpperCase()}
            </p>
        </ button>
    )
}


