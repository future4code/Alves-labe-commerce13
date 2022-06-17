import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { FiltroComp } from './componentes/Filtro-component';
import { Carrinho } from './componentes/Carrinho-component';
import { HomeComp } from './componentes/Home-component';
import { FooterComp } from './componentes/Footer-component';
import { HeaderComp } from './componentes/Header-component';
import { NavComp } from './componentes/nav';
import { CardComponent } from './componentes/Card-component';



const PaginaTotal = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  background-color: brown;
  `

export default class App extends Component {
 


  render() {
    

    return (
      <PaginaTotal>
        <HeaderComp />
        <HomeComp />
        <CardComponent/>
        <FooterComp />
      </PaginaTotal>
    );
  }
}




