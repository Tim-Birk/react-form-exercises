import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import BoxList from './BoxList';

it('renders without crashing', function () {
  render(<NewBoxForm />);
});

it('matches snapshot', function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', function () {
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

  // box exists!
  expect(queryByTestId('Box-purple-120-100')).toBeInTheDocument();
  // box styled correctly
  expect(queryByTestId('Box-purple-120-100')).toHaveStyle(`
      background-color: purple;
      height: 100px;
      width: 120px;
    `);
});
