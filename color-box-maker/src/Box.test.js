import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';
import BoxList from './BoxList';

it('renders without crashing', function () {
  render(<Box />);
});

it('matches snapshot', function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it('can remove a new box', function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no box yet
  expect(queryByTestId('Box-purple-120-100')).not.toBeInTheDocument();

  const colorInput = getByLabelText('Color:');
  const heightInput = getByLabelText('Height:');
  const widthInput = getByLabelText('Width:');
  const submitBtn = queryByText('Add New');

  // fill out the form
  fireEvent.change(colorInput, { target: { value: 'purple' } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(widthInput, { target: { value: 120 } });
  fireEvent.click(submitBtn);

  // box exists
  expect(queryByTestId('Box-purple-120-100')).toBeInTheDocument();
  const boxDeleteBtn = queryByTestId('Box-delete-purple-120-100');
  // box delete button exists
  expect(boxDeleteBtn).toBeInTheDocument();
  fireEvent.click(boxDeleteBtn);
  // box removed
  expect(queryByTestId('Box-purple-120-100')).not.toBeInTheDocument();
});
