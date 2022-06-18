import React from "react";
import styled from "styled-components";
import pessoapc from "./imagens/pessoapc.png"
import glass from "./imagens/glass.png"
import logoheader from "./imagens/logoheader.png"

const Headerstyle = styled.header`
  width: 98.71vw;
  height: 20vh;
  background-color: #6163c4;
  font-size: small;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  color: aliceblue;
  font-size: medium;


`








export function HeaderComp() {
  return (
    <div>
      <Headerstyle>

        <section>
          <a target="_blank" href="https://www.gmail.com/">Atendimento ao Consumidor<img src={pessoapc} alt="atendimento"></img> </a>
        </section>
        <section>
          <a href="./">Login |</a>
          <a href="./">Cadastre-se</a>
        </section>

        <section>
          <input type="text" placeholder="Buscar" /><img src= {glass} alt="lupa"></img>
        </section>
      </Headerstyle>
        <nav class="navstyle">
        <img src={logoheader} alt="logo" />
        <a href="./index.html">Início |</a>
          <a href="./Produtos.html">Produtos |</a>
          <a href="./contato.html"> Contato|</a>
          <a href="./perguntas-frequentes.html"> Perguntas Frequentes|</a>
          <a href="">Quem Somos</a>
  
    </nav>

    </div>

  );
}

