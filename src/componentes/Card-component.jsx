import React from 'react'
import styled from 'styled-components'
import { Component } from 'react'

const Card = styled.div`
  display: grid;
  grid-template-columns: 100%;
  max-width: 100%;
  border-radius: 5px;
  border: solid blue 1px;
  margin: 15px;
  padding-bottom: 1.5px;
  &:hover {
    border: solid blue 3px;
    transition: 0.7s;
    margin: 12px;

  }
`
const DivImg = styled.div`
  justify-self: center;
`

const DivDescricao = styled.div`
  background-color: whitesmoke;
  padding-bottom: 10px;

`

const ImgStyled = styled.img`
  max-width: 100px;
`

const PStyled = styled.p`
  padding-left: 20px;
  padding-right: 20px;
`

const TitleStyled = styled.h3`
  padding-left: 20px;
  font-family: Verdana, Tahoma, sans-serif;
  font-weight: bold;

`
const ButtonStyled = styled.button`
  border-radius: 7px;
  border: 2px solid #575bd8;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px 20px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #575bd850;
  transition: 0.7s;
  color: black;
  
  &:hover {
    background-color: #6367d5;
    transition: 0.7s;

  }
  &:active {
    background-color: #010465d0;
    transition: 0.2s;
   border: 2px solid black;
    border-bottom: 2px solid #010465d0 ;
    border-left: 1px;
    color: black;
  }
 
  
`

export class CardComponent extends Component {
  render() {

    return (
      <Card>
      <DivImg>
        <ImgStyled
          src={'a'}
          alt='Imagem do produto'
        />
      </DivImg>
      <DivDescricao>
        <TitleStyled>{'b'}</TitleStyled>
        <PStyled><b>R$ {'c'}</b></PStyled>
        <ButtonStyled> Adicione ao carrinho</ButtonStyled>
      </DivDescricao>
    </Card>
    )
  }
}
