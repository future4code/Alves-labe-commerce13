import React from "react";
import { CardComponent } from "./Card-component";
import styled from "styled-components";
import produto1 from "./imagens/produto1.jpg"
import produto2 from "./imagens/produto2.jpg"
import produto3 from "./imagens/produto3.jpg"
import produto4 from "./imagens/produto4.jpg"
// import produto5 from "./imagens/produto5.jpg"
// import produto6 from "./imagens/produto6.jpg"
// import produto7 from "./imagens/produto7.jpg"
// import produto8 from "./imagens/produto8.jpg"
// import produto9 from "./imagens/produto9.jpg"
// import produto10 from "./imagens/produto10.jpg"
// import produto11 from "./imagens/produto11.jpg"
// import produto12 from "./imagens/produto12.jpg"



const Homerstyled=styled.main`
  width: 100%;
height: 100vh;
background-color: #7f2a99;

`


const DivPricipal = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  `

export  class HomeComp extends React.Component {
state=
[{}]



render(){

  return (

    <DivPricipal>
      <CardComponent
      
      imagem={produto1}
      nome="Colar Pingente Mini-Cápsula com Meteorito Campo del Cielo"
      descricao=' Descrição ou tipo?'
      valor= "189.00"
      />
      <CardComponent
      imagem={produto2}
      nome='Pedra Roxa'
      descricao='Isso nem é uma pedra espacial -.-'
      valor='65,55'
      />
      <CardComponent
      imagem={produto3}
      nome='Pedra Roxa'
      descricao='Isso nem é uma pedra espacial -.-'
      valor='65,55'
      />
      <CardComponent
      imagem={produto4}
      nome='Pedra Roxa'
      descricao='Isso nem é uma pedra espacial -.-'
      valor='65,55'
      />
    </DivPricipal>

  );
}
}

