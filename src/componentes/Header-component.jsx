import React from "react";
import styled from "styled-components";
import pessoapc from "./imagens/pessoapc.png"
import glass from "./imagens/glass.png"
import logoheader from "./imagens/logo.png"

const Headerstyle = styled.header`
   width: 100%;
    height: 23vh;
    background-color: #6163c4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    color: aliceblue;
    font-size: medium;



`
const logoheaderStyled = styled.img`
width: 20rem;

`
  


const Atendimento = styled.a`
  display:flex;
  flex-direction:row;
  width:3rem;
  
  
`





export function HeaderComp() {
  return (
    <div>
      <Headerstyle>

        <section>
          <Atendimento  href="https://www.gmail.com/"><img src={pessoapc} alt="atendimento"></img> </Atendimento>
        </section>
        <section>
          {/* <a href="./">Login |</a> */}
          {/* <a href="./">Cadastre-se</a> */}
        </section>

       
      </Headerstyle>
        <logoheaderStyled src={logoheader} alt="logo" />
        <a href="./index.html">Início |</a>
          <a href="./Produtos.html">Produtos |</a>
          <a href="./contato.html"> Contato|</a>
          <a href="./perguntas-frequentes.html"> Perguntas Frequentes|</a>
          {/* <a href="">Quem Somos</a> */}

    </div>

  );
}

