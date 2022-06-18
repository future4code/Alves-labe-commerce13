import React from 'react'
import styled from 'styled-components'
import produto1 from "./imagens/produto1.jpg"
import produto2 from "./imagens/produto2.jpg"
import produto3 from "./imagens/produto3.jpg"
import produto4 from "./imagens/produto4.jpg"
import produto5 from "./imagens/produto5.jpg"
import produto6 from "./imagens/produto6.jpg"
import produto7 from "./imagens/produto7.jpg"
import produto8 from "./imagens/produto8.jpg"
import produto9 from "./imagens/produto9.jpg"
import produto10 from "./imagens/produto10.jpg"
import produto11 from "./imagens/produto11.jpg"
import produto12 from "./imagens/produto12.jpg"


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

const DivPricipal = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  `






export  function CardComponent() {
  const arraydeprodutos=[
    {
      "id": 1,
      "name": "Colar Pingente Mini-Cápsula com Meteorito Campo del Cielo",
      "value": 189.00,
      "imageUrl": produto1
    },
  
    {
      "id": 2,
      "name": "Meteorito Campo Del Cielo",
      "value": 60.00,
      "imageUrl": produto2
    },
  
    {
      "id": 3,
      "name": "Colar Pingente Cápsula com Meteorito Campo del Cielo",
      "value": 299.00,
      "imageUrl": produto3
    },
  
    {
      "id": 4,
      "name": "Meteorito Campo Del Cielo",
      "value": 80.00,
      "imageUrl": produto4
    },
  
    {
      "id": 5,
      "name": "Meteorito NWA 7977 - Acondrito Diogenito",
      "value": 70.00,
      "imageUrl": produto5
    },
  
    {
      "id": 6,
      "name": "Colar Pingente Mini-Cápsula / Meteorito NWA 7977",
      "value": 229.00,
      "imageUrl": produto6
    },
  
    {
      "id": 7,
      "name": "Meteorito Lunar NWA 11273 - Feldsp. Breccia",
      "value": 369.00,
      "imageUrl": produto7
    },
  
    {
      "id": 8,
      "name": "Meteorito Angra- 66g",
      "value": 70000.00,
      "imageUrl": produto8
    },
  
    {
      "id": 9,
      "name": "Pedra de impacto meteorito checo energia de cristal vidro natural",
      "value": 25000.0,
      "imageUrl": produto9
    },
  
    {
      "id": 10,
      "name": "Aerólito natural de Ferro300-400g quartzo cristal de quartzo",
      "value": 193.00,
      "imageUrl": produto10
    },
  
    {
      "id": 11,
      "name": "Raro natural  meteorito chinês de ferro magnético de alta frequência aerolite",
      "value": 1200.0,
      "imageUrl": produto11
    },
  
    {
      "id": 12,
      "name": "Coleção de pedras espaciais,  naturais de quatzo raro",
      "value": 159.00,
      "imageUrl": produto12
    }
  ]

  const exbirprodutos=arraydeprodutos.map((item)=>{
    return (
<Card key={item.id}>
  <DivImg>
    <ImgStyled
      src={item.imageUrl}
      alt='Imagem do produto'
      />
  </DivImg>
  <DivDescricao>
    <TitleStyled>{item.name}</TitleStyled>
    <PStyled><b>R$ {item.value}</b></PStyled>
    <ButtonStyled> Adicione ao carrinho</ButtonStyled>
  </DivDescricao>
</Card>
    )
  })
  
    return (
     <DivPricipal>{exbirprodutos}</DivPricipal>)
       
    
  
}