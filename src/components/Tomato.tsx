import React from 'react';
import styled from 'styled-components';
import MainInfo from './MainInfo';
import NutritionalInfo from './NutritionalInfo';
import TabView from './TabView';
import { mainContent } from '../content/main';
import { tomatoTabs } from '../content/tomatoTabs';
import Contact from './Contact';

const Tomato = () => {
  return (
    <Container>
      <Title>
        <h1>{mainContent.title}</h1>
      </Title>
      <ContentContainer>
        <MainInfo />
        <NutritionalInfo />
      </ContentContainer>

      <TabsContainer>
        <TabView tabs={tomatoTabs} />
      </TabsContainer>
      <Contact />
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
  justify-content: space-between;
`;

const TabsContainer = styled.div`
  width: 66%;
  padding-top: 1rem;
`;

export default Tomato;
