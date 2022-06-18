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
import instagram from "./imagens/instagram.png"
import whatsapp from "./imagens/whatsapp.png"



const FooterStyled = styled.footer`
height: 200px;
display: grid;
    bottom: 0;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr;
    border: 1px solid black;
    color: rgb(255, 195, 85) ;
    background-color: rgb(11, 5, 122);
    padding-left: 30px;
    padding-top: 5px;
`
const Img = styled.img`
height: 2rem;

`




export function FooterComp() {
  return (
    <FooterStyled>
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
      <h2>Siga-nos nas redes sociais:</h2>
      <div class="redes">
        <a target="_blank" href="https://www.facebook.com/"><Img src={facebook2} alt="" /></a>
      </div>
      <div class="redes">
        <a target="_blank" href="https://www.instagram.com/"><Img src={instagram} alt="" /></a>
      </div>
      <div class="redes">
        <a target="_blank" href="https://web.whatsapp.com/"><Img src={whatsapp} alt="" /></a>
      </div>

      <p>Copyright Loja Galeria do Meteorito - 2022. Todos os direitos reservados.</p>
    </FooterStyled>
  );
}

