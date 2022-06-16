import React from "react";
import styled from "styled-components";

const Headerstyle = styled.header`
  width: 100%;
  height: 20vh;
  background-color: #2a2ca5;

`
export function HeaderComp() {
  return (
    <Headerstyle>
      <section>
        <a target="_blank" href="https://www.gmail.com/">Atendimento ao Consumidor<img src="imagens\customer-care.png" alt="atendimento"></img> </a>
      </section>
      <section>
        <a href="./">Login |</a>
        <a href="./">Cadastre-se</a>
      </section>

      <section>
        <input type="text" placeholder="Buscar" /><img src="imagens\glass.png" alt="lupa"></img>
      </section>

    </Headerstyle>
  );
}

