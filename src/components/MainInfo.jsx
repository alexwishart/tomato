import React from 'react';
import styled from 'styled-components';
import { mainContent } from '../content/main';

const MainInfo = () => {
  return (
    <Container>
      <h1>{mainContent.title}</h1>
      <TomatoImage src={mainContent.image.src} alt={mainContent.image.alt} />

      <h2>{mainContent.content.title}</h2>
      {mainContent.content.paragraphs.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>;
      })}
      <ul>
        {mainContent.content.varieties.map((variety) => {
          return <li key={variety}>{variety}</li>;
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
`;

const TomatoImage = styled.img`
  width: 250px;
`;

export default MainInfo;
