import React from 'react';
import { render } from '@testing-library/react';
import Tomato from './Tomato';

jest.mock('./TabView', () => {
  return jest.fn(() => <div id="TabView" />);
});

jest.mock('./Contact', () => {
  return jest.fn(() => <div id="Contact" />);
});

describe('The Tomato component', () => {
  it('should render correctly', () => {
    expect(render(<Tomato />)).toMatchSnapshot();
  });
});
