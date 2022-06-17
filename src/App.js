import React from 'react';
import styled from 'styled-components';
import  FiltroComp  from './componentes/Filtro-component';
import  Carrinho  from './componentes/Carrinho-component';
import  HomeComp  from './componentes/Home-component';
import  FooterComp  from './componentes/Footer-component';
import  HeaderComp  from './componentes/Header-component';
import  NavComp  from './componentes/nav';



const PaginaTotal = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  background-color: brown;
  `

function App() {
  return (
    <PaginaTotal>
      <HeaderComp />
      <HomeComp />
      <FooterComp />
    </PaginaTotal>
  );
}

export default App;
