import React from "react";
import styled from "styled-components";



const Navstyle = styled.nav`
  width: 100%;
  height: 20vh;
  background-color:#72739a;
  position:fixed;
  font-family:'Kdam Thmor Pro', sans-serif;


`
export function NavComp() {
  return (
    <Navstyle>
        <img src="imagens\logo-sem-fundo.png" alt="logo" />
      <a href="">Início |</a>
        <a href="">Produtos |</a>
        <a href=""> Contato|</a>
        <a href=""> Perguntas Frequentes|</a>
        <a href="">Quem Somos</a>


    </Navstyle>
  );
}