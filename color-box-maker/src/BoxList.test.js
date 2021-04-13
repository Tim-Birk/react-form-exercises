import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', function () {
  render(<BoxList />);
});

it('matches snapshot', function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no box yet
  expect(queryByTestId('Box')).not.toBeInTheDocument();

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
  expect(queryByTestId('Box')).toBeInTheDocument();
  // box styled correctly
  expect(queryByTestId('Box')).toHaveStyle(`
      background-color: purple;
      height: 100px;
      width: 120px;
    `);
});

it('can remove a new box', function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no box yet
  expect(queryByTestId('Box')).not.toBeInTheDocument();

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
  expect(queryByTestId('Box')).toBeInTheDocument();
  const boxDeleteBtn = queryByTestId('Box-delete');
  // box delete button exists
  expect(boxDeleteBtn).toBeInTheDocument();
  fireEvent.click(boxDeleteBtn);
  // box removed
  expect(queryByTestId('Box')).not.toBeInTheDocument();
});

it('can add a new box', function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no box yet
  expect(queryByTestId('Box')).not.toBeInTheDocument();

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
  expect(queryByTestId('Box')).toBeInTheDocument();
  // box styled correctly
  expect(queryByTestId('Box')).toHaveStyle(`
      background-color: purple;
      height: 100px;
      width: 120px;
    `);
});
