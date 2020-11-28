import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MainInfo from './components/MainInfo';

const Tomato = () => {
  return (
    <Container>
      <MainInfo />
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
`;

const rootElement = document.getElementById('root');
ReactDOM.render(<Tomato />, rootElement);
