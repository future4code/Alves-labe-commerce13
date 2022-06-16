import React from "react";
import styled from "styled-components";

const Navstyle = styled.header`
  width: 100%;
  height: 20vh;
  background-color: #2a2ca5;

`
export function NavComp() {
  return (
    <Navstyle>
        <img src="" alt="" />
      <a href="./">Início |</a>
        <a href="">Produtos |</a>
        <a href=""> Contato|</a>
        <a href=""> Perguntas Frequentes|</a>
        <a href="">Quem Somos</a>


    </Navstyle>
  );
}