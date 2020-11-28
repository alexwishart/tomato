import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import tomatoImage from "./images/tomato.jpg";

const Tomato = () => {
  return (
    <Container>
      <h1>The Tomato</h1>
      <TomatoImage src={tomatoImage} />
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
`

const TomatoImage = styled.img`
  width: 250px;  
`

const rootElement = document.getElementById("root");
ReactDOM.render(<Tomato />, rootElement);
