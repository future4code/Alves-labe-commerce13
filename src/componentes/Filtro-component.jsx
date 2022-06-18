import React, { Component } from "react";
import styled from "styled-components";


export class FiltroComp extends Component {

  state = {
    manifest: CardList,
    query:"",
    minPrice: "",
    maxPrice:"",
    sortingParameter:""
  }

updateQuery=(event)=>{
  this.setState({
    query: event.target.value
  })
}

updateMinPrice=(event)=>{
  this.setState({
    minPrice: event.target.value
  })
}

updateMaxPrice=(event)=>{
  this.setState({
    maxPrice: event.target.value
  })
}

updateSortingParameter=(event)=>{
  this.setState({
    sortingParameter: event.target.value
  })
}


render() {
  return <div>
    <header/>
    <div>
      <input 
      placeholder="Pesquisa"
      value={this.state.query}
      onChange={this.updateQuery}/>

<input 
type="number"
      placeholder="Preço Mínimo"
      value={this.state.minPrice}
      onChange={this.updateMinPrice}/>

<input 
type="number"
      placeholder="Preço Máximo"
      value={this.state.maxPrice}
      onChange={this.updateMaxPrice}/>
      </div>
<div>

<label htmlFor="sort">Ordenação:</label>
<select
 name="sort"
 value={this.state.sortingParameter}
 onChange={this.updateSortingParameter}
 >
  
  <option value="title">Produto:</option>
  <option value="price">Preço:</option>
</select>


    </div>




    
    <ListaContainer>
    {this.state.produto.filter(
      produto=>{
        return produto.title.toLowerCase().includes(this.state.query) || produto.description.toLowerCase().includes(this.state.query)
      }
    )
    .filter(produto=>{
      return this.state.minPrice === "" || produto.minPrice>= this.state.minPrice
    })
    .filter(produto=>{
      return this.state.maxPrice === "" || produto.maxPrice <= this.state.maxPrice
    })

    .map(produto =>{
      return <Card key = {produto.id} produto={produto}/>
    })}
    </ListaContainer>
  </div>
}

}
