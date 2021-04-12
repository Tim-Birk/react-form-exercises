import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import TodoList from './TodoList';

it('renders without crashing', function () {
  render(<Todo />);
});

it('matches snapshot', function () {
  const { asFragment } = render(<Todo task='This is a test' />);
  expect(asFragment()).toMatchSnapshot();
});

it('can remove a new Todo', function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);

  // no Todo yet
  expect(queryByText('- This is a test')).not.toBeInTheDocument();

  const taskInput = getByLabelText('Task:');
  const submitBtn = queryByText('Add New');

  // fill out the form
  fireEvent.change(taskInput, { target: { value: 'This is a test' } });
  fireEvent.click(submitBtn);

  // Todo exists
  expect(queryByText('- This is a test')).toBeInTheDocument();
  const TodoDeleteBtn = queryByTestId('Todo-delete-This_is_a_test');

  // Todo delete button exists
  expect(TodoDeleteBtn).toBeInTheDocument();
  fireEvent.click(TodoDeleteBtn);
  // Todo removed
  expect(queryByText('- This is a test')).not.toBeInTheDocument();
});
