import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";

const indice = Math.floor(Math.random() * (palavras.length + 1));



export default function App() {
  const palavra = palavras[indice].split("");
  console.log(palavra);
  const [underline, setUnderline] = React.useState(palavra.map(i => i = "_"));
  const [habilitado, setHabilitado] = React.useState(false);
  const [estadoJogo, setEstadoJogo] = React.useState("jogando");
  const [imagem, setImagem] = React.useState(0);

  function habilitaJogo() {
    setHabilitado(true);
  }
  function desabilitaJogo() {
    setHabilitado(false);
  }

  if (estadoJogo === "perdido") {
    desabilitaJogo();
    setEstadoJogo("finalizado");
  } else if (estadoJogo === "ganho") {
    desabilitaJogo();
    setEstadoJogo("finalizado");
  }

  return (
    <>
      <Jogo imagem={imagem} funcao={habilitaJogo} habilitado={habilitado} palavra={palavra} underline={underline} estadoJogo={estadoJogo} />
      <Letras imagem={imagem} setImagem={setImagem} habilitado={habilitado} palavra={palavra} underline={underline} setUnderline={setUnderline} setEstadoJogo={setEstadoJogo} />
    </>
  );
}

