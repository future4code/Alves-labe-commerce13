import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import ceu from "./imagens/ceu.jpg";

// import  {FiltroComp}  from './componentes/Filtro-component';
// import  Carrinho  from './componentes/Carrinho-component';
import  {FooterComp}  from './componentes/Footer-component';

import  {HeaderComp}  from './componentes/Header-component';

import { CardComponent } from './componentes/Card-component';
import  {NavComp}  from './componentes/nav';



const PaginaTotal = styled.div`
  width: 96.15vw;
  max-width: 100%;
  height: auto;

  background-image:ceu;
`



export default class App extends Component {
 


  render() {
    

    return (
      <PaginaTotal>

        {/* <HeaderComp /> */}
        {<FiltroComp/>}
        <CardComponent/>
         <FooterComp /> 

      </PaginaTotal>
    );
  }
}




