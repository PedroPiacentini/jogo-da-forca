import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";


export default function App() {
  const [habilitado, setHabilitado] = React.useState(false);

  function habilitaJogo() {
    setHabilitado(true);
  }

  function desahabilitaJogo() {
    setHabilitado(false);
  }

  return (
    <>
      <Jogo funcao={habilitaJogo} habilitado={habilitado} />
      <Letras habilitado={habilitado} funcao={desahabilitaJogo} />
    </>
  );
}

