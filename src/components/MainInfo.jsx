import React from 'react';
import styled from 'styled-components';
import { mainContent } from '../content/main';

const MainInfo = () => {
  return (
    <>
      <h1>{mainContent.title}</h1>
      <TomatoImage src={mainContent.image} />
    </>
  );
};

const TomatoImage = styled.img`
  width: 250px;
`;

export default MainInfo;
