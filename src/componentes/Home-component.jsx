import React from "react";
import CardComponent from '../Exercicio/Exercicio'
import styled from "styled-components";

const DivPricipal = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  `

export default function HomeComp() {
  return (
    <DivPricipal>
      <CardComponent
      imagem='https://images-na.ssl-images-amazon.com/images/I/718VgOqXQsL.__AC_SX300_SY300_QL70_ML2_.jpg'
      nome='Pedra Roxa'
      descricao=' Descrição ou tipo?'
      valor='65,55'
      />
      <CardComponent
      imagem='https://images-na.ssl-images-amazon.com/images/I/718VgOqXQsL.__AC_SX300_SY300_QL70_ML2_.jpg'
      nome='Pedra Roxa'
      descricao='Isso nem é uma pedra espacial -.-'
      valor='65,55'
      />
      <CardComponent
      imagem='https://images-na.ssl-images-amazon.com/images/I/718VgOqXQsL.__AC_SX300_SY300_QL70_ML2_.jpg'
      nome='Pedra Roxa'
      descricao='Isso nem é uma pedra espacial -.-'
      valor='65,55'
      />
      <CardComponent
      imagem='https://images-na.ssl-images-amazon.com/images/I/718VgOqXQsL.__AC_SX300_SY300_QL70_ML2_.jpg'
      nome='Pedra Roxa'
      descricao='Isso nem é uma pedra espacial -.-'
      valor='65,55'
      />
    </DivPricipal>
  );
}

