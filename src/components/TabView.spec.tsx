import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TabView from './TabView';
import { act } from 'react-dom/test-utils';
import { TabInfo } from '../content/tabInfo';

describe('The TabView component', () => {
  it('should render correctly (with the first tab active)', () => {
    expect(render(<TabView tabs={testTabs} />)).toMatchSnapshot();
  });

  it('should render correctly when a different tab is clicked', () => {
    const { getAllByRole, queryByText } = render(<TabView tabs={testTabs} />);

    const firstTab = getAllByRole('tab')[0];
    const secondTab = getAllByRole('tab')[1];

    act(() => {
      fireEvent.click(secondTab);
    });

    expect(firstTab).toHaveStyleRule('background', 'light gray');
    expect(secondTab).toHaveStyleRule('background', 'none');
    expect(queryByText(testTabs[0].content)).toBeFalsy();
    expect(queryByText(testTabs[1].content)).toBeTruthy();
  });
});

const testTabs: TabInfo[] = [
  { title: '1', content: 'content 1' },
  { title: '2', content: 'content 2' },
  { title: '3', content: 'content 3' },
];
