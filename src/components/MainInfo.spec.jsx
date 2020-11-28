import React from 'react';
import { render } from '@testing-library/react';
import MainInfo from './MainInfo';

describe('The MainInfo component', () => {
  it('should render correctly', () => {
    expect(render(<MainInfo />)).toMatchSnapshot();
  });
});
