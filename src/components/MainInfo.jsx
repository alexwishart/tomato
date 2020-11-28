import React from "react";
import styled from 'styled-components'
import tomatoImage from "../images/tomato.jpg";

const MainInfo = () => {
    return <>
    <h1>The Tomato</h1>
      <TomatoImage src={tomatoImage} />
      </>
}

const TomatoImage = styled.img`
  width: 250px;  
`

export default MainInfo;