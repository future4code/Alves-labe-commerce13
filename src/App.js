import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Ceu from "./componentes/imagens/ceu.png";


import  {FiltroComp}  from './componentes/Filtro-component';
// import  Carrinho  from './componentes/Carrinho-component';
import  {FooterComp}  from './componentes/Footer-component';
import  {HeaderComp}  from './componentes/Header-component';







const PaginaTotal = styled.div`
  width: 96.15vw;
  max-width: 100%;
  height: auto;
background-image:url(${Ceu});

`



export default class App extends Component {
 


  render() {
    

   
    return (
      <PaginaTotal>

        <HeaderComp />
        <FiltroComp/>
        <FooterComp />

      </PaginaTotal>
    );
  }
}




