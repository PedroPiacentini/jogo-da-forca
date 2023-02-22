import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const [habilitado, setHabilitado] = React.useState(false);

  return (
    <>
      <Jogo funcao={() => setHabilitado(true)} />
      <Letras habilitado={habilitado} />
    </>
  );
}
