import React from 'react';
import { render } from '@testing-library/react';
import NutritionalInfo from './NutritionalInfo';

describe('The NutritionalInfo component', () => {
  it('should render correctly', () => {
    expect(render(<NutritionalInfo />)).toMatchSnapshot();
  });
});
