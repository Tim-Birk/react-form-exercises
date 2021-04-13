import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', function () {
  render(<Box id='1' color='blue' height={100} width={120} />);
});

it('matches snapshot', function () {
  const { asFragment } = render(
    <Box id='1' color='blue' height={100} width={120} />
  );
  expect(asFragment()).toMatchSnapshot();
});
