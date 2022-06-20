import React from "react";
import styled from "styled-components";
import pessoapc from "./imagens/pessoapc.png"
import glass from "./imagens/glass.png"
import logoheader from "./imagens/logo.png"

const Headerstyle = styled.header`
   width: 100%;
    height: 23vh;
    background-image: url(${logoheader});
    background-repeat: no-repeat; 
    background-size:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    color: aliceblue;
    font-size: medium;
    text-align: center;



`
const logoheaderStyled = styled.img`
width: 20rem;

`
  


const Atendimento = styled.a`
  display:flex;
  flex-direction:row;
  width:3rem;
  
  
`





export function HeaderComp() {
  return (
    <div>
      <Headerstyle>
        <h1>LabMeteoro</h1>
      </Headerstyle>
     <p></p>
       
    </div>

  );
}

