import React from "react";
import styled from "styled-components";
import amex2x from "./imagens/amex2x.png"
import aura2x from "./imagens/aura2x.png"
import diners2x from "./imagens/diners2x.png"
import elo2x from "./imagens/elo2x.png"
import mastercard2x from "./imagens/mastercard2x.png"
import pagseguro2x from "./imagens/pagseguro2x.png"
import visa2x from "./imagens/visa2x.png"
import correios2x from "./imagens/correios2x.png"
import pix from "./imagens/pix.png"
import hoje2x from "./imagens/hoje2x.png"
import facebook2 from "./imagens/facebook2.png"
import instagram from "./imagens/Instagram2.png"
import whatsapp from "./imagens/whatsapp.png"



const FooterStyled = styled.footer`
height: 120px;
display: grid;
margin-bottom: 0;
width: 100%;
grid-template-rows: 1pt 1pt 0.3pt;
border: 1px solid black;
color: rgb(85, 122, 255) ;
background-color: rgb(11, 5, 122);
padding-left: 20px;
padding-top: 50px;
padding-bottom:5px;

`
const Img = styled.img`
height: 2rem;

`
const DivCards = styled.div`
display:flex;
justify-content:space-around;
align-items:flex-end;

`
const DivRedes = styled.div`
display:grid;
grid-template-columns: 300px 50px 50px 50px;
grid-template-rows:1pt 1pt;
padding-bottom:20px;
padding-top:8px;
font-family:'Kdam Thmor Pro', sans-serif;
`
const DivCopi = styled.div`
display:inline;
justify-content:space-around;
padding-bottom:5px;
padding-top:60px;
font-family:'Kdam Thmor Pro', sans-serif;
font-size:small;
margin-left:800px;
`

export function FooterComp() {
  return (
    <FooterStyled>
      <DivCards>
        <Img src={amex2x} alt="cartão de banco" />
        <Img src={aura2x} alt="cartão de banco" />
        <Img src={diners2x} alt="cartão de banco" />
        <Img src={elo2x} alt="cartão de banco" />
        <Img src={mastercard2x} alt="cartão de banco" />
        <Img src={pagseguro2x} alt="cartão de banco" />
        <Img src={visa2x} alt="cartão de banco" />
        <Img src={correios2x} alt="correios" />
        <Img src={pix} alt="pix" />
        <Img src={hoje2x} alt="boleto bancário" />
      </DivCards>
       <DivRedes>
      <h2>Siga-nos nas redes sociais:</h2>

     
        <a href="https://www.facebook.com/"><Img src={facebook2} alt="" /></a>


        <a href="https://www.instagram.com/"><Img src={instagram} alt="" /></a>


        <a href="https://web.whatsapp.com/"><Img src={whatsapp} alt="" /></a>
      </DivRedes>
      <DivCopi>
        <p>©Copyright Loja Aerolito Store - 2022. Todos os direitos reservados.</p></DivCopi>
    </FooterStyled>
    
  );
}

