import React, { Component } from "react";
import styled from "styled-components";
import { arraydeprodutos } from "./Card-component";





const Card = styled.div`
  display: inline-block;
  max-width: 100%;
  border-radius: 5px;
  border: solid blue 1px;
  margin: 15px;
  padding-bottom: 1.5px;
  width: 300px;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
 /* grid-template-rows: 1fr 1fr 1fr 1fr; */
    font-size: medium;
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
  max-width: 100%;
`

const PStyled = styled.p`
  padding-left: 20px;
  padding-right: 20px;
`

const TitleStyled = styled.h3`
  padding-left: 20px;
  font-family:'Kdam Thmor Pro', sans-serif;
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








export class FiltroComp extends Component {

  state = {
    produtosArray:arraydeprodutos,
    buscaValor:"",
    minValor: "",
    maxValor:"",
    ordemProdutos:"nome",
    ordenacao:1
  }

updateQuery=(event)=>{
  this.setState({
    buscaValor: event.target.value
  })
}

updateMinPrice=(event)=>{
  this.setState({
    minValor: event.target.value
  })
}

updateMaxPrice=(event)=>{
  this.setState({
    maxValor: event.target.value
  })
}

updateSortingParameter=(event)=>{
  this.setState({
    ordemProdutos: event.target.value
  })
}

updateOrdem=(event)=>{
this.setState({
ordenacao:event.target.value
})


}

render() {
  return <div>
    <header/>
    <div>
      <input 
      placeholder="Pesquisa"
      value={this.state.buscaValor}
      onChange={this.updateQuery}/>

<input 
type="number"
      placeholder="Preço Mínimo"
      value={this.state.minValor}
      onChange={this.updateMinPrice}/>

<input 
type="number"
      placeholder="Preço Máximo"
      value={this.state.maxValor}
      onChange={this.updateMaxPrice}/>
</div>
<div>

<label For="sort">Ordem:</label>
<select
 name="sort"
 value={this.state.ordemProdutos}
 onChange={this.updateSortingParameter}
 >
  
  <option value="nome">Produto:</option>
  <option value="valor">Preço:</option>
</select>

<select
 name="Ordenacao"
 value={this.state.ordenacao}
 onChange={this.updateOrdem}
 >
  
  <option value={1}>Crescente:</option>
  <option value={-1}>Decrescente:</option>
</select>

    </div>


    {this.state.produtosArray.filter(produto =>{
      return produto.name.toLowerCase().includes(this.state.buscaValor.toLowerCase())||
      produto.descricao.toLowerCase().includes(this.state.buscaValor.toLowerCase())
    })

    .filter(produto=>{
        return this.state.minValor === "" || produto.value >= this.state.minValor
      })
      .filter(produto=>{
        return this.state.maxValor === "" || produto.value <= this.state.maxValor
      })
      .sort((valor1,valor2)=>{
        switch (this.state.ordemProdutos) {
          case "nome":
            return this.state.ordenacao*( valor1.name.localeCompare(valor2.name))
            default:
              return this.state.ordenacao* (valor1.value-valor2.value)
      }})
    .map((item)=>{
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
    <TitleStyled>{item.descricao}</TitleStyled>
    <PStyled><b>R$ {item.value}</b></PStyled>
    <ButtonStyled> Adicione ao carrinho</ButtonStyled>
  </DivDescricao>
</Card>
    )})
  }
    </div>
}
}
