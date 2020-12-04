import React, { useState } from 'react';
import styled from 'styled-components';
import { TabInfo } from '../content/tabInfo';

const TabView: React.FC<{ content: TabInfo[] }> = (props: {
  content: TabInfo[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs role="tablist">
        {props.content.map((tab, i) => {
          return (
            <Tab role="presentation" key={tab.title}>
              <TabButton
                role="tab"
                onClick={() => {
                  setActiveTab(i);
                }}
                active={i === activeTab}
              >
                {tab.title}
              </TabButton>
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

const Tabs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

const Tab = styled.li`
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const TabButton = styled.button<{ active: boolean }>`
  height: 100%;
  width: 100%;
  padding: 0;
  font: inherit;
  cursor: pointer;
  border: none;
  outline: 0.1rem solid black;

  background: ${(props) => (props.active ? 'none' : 'light gray')};
`;

export default TabView;
