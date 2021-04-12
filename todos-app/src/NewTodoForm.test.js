import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

it('renders without crashing', function () {
  render(<NewTodoForm />);
});

it('matches snapshot', function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new Todo', function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no Todo yet
  expect(queryByText('- This is a test')).not.toBeInTheDocument();

  const taskInput = getByLabelText('Task:');
  const submitBtn = queryByText('Add New');

  // fill out the form
  fireEvent.change(taskInput, { target: { value: 'This is a test' } });
  fireEvent.click(submitBtn);

  // Todo exists!
  expect(queryByText('- This is a test')).toBeInTheDocument();
});
