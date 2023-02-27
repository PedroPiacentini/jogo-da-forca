import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";





export default function App() {
  const [palavra, setPalavra] = React.useState("");
  console.log(palavra);
  const [underline, setUnderline] = React.useState([]);
  const [habilitado, setHabilitado] = React.useState(false);
  const [estadoJogo, setEstadoJogo] = React.useState("jogando");
  const [imagem, setImagem] = React.useState(0);

  function habilitaJogo() {
    setHabilitado(true);
    const indice = Math.floor(Math.random() * (palavras.length + 1));
    setPalavra((palavras[indice]).split(""));
    const aux = (palavras[indice]).split("");
    setUnderline(aux.map(i => i = "_"));
    setEstadoJogo("jogando")
    setImagem(0);
    return (
      <>
        <Jogo imagem={imagem} funcao={habilitaJogo} habilitado={habilitado} palavra={palavra} underline={underline} estadoJogo={estadoJogo} />
        <Letras imagem={imagem} setImagem={setImagem} habilitado={habilitado} palavra={palavra} underline={underline} setUnderline={setUnderline} setEstadoJogo={setEstadoJogo} estadoJogo={estadoJogo} />
      </>
    );
  }
  function desabilitaJogo() {
    setHabilitado(false);
  }

  if (estadoJogo === "perdido") {
    desabilitaJogo();
    setEstadoJogo("fim-perdido");
  } else if (estadoJogo === "ganho") {
    desabilitaJogo();
    setEstadoJogo("fim-ganho");
  }

  return (
    <>
      <Jogo imagem={imagem} funcao={habilitaJogo} habilitado={habilitado} palavra={palavra} underline={underline} estadoJogo={estadoJogo} />
      <Letras imagem={imagem} setImagem={setImagem} habilitado={habilitado} palavra={palavra} underline={underline} setUnderline={setUnderline} setEstadoJogo={setEstadoJogo} estadoJogo={estadoJogo} />
    </>
  );
}

