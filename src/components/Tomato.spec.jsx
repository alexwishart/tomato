import React from 'react';
import { render } from '@testing-library/react';
import Tomato from './Tomato';

describe('The Tomato component', () => {
  it('should render correctly', () => {
    expect(render(<Tomato />)).toMatchSnapshot();
  });
});
