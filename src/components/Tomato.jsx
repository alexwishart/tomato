import React from 'react';
import styled from 'styled-components';
import MainInfo from './MainInfo';

const Tomato = () => {
  return (
    <Container>
      <Title>
        <h1>The Tomato</h1>
      </Title>
      <ContentContainer>
        <MainInfo />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;

  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
`;

const Title = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export default Tomato;
