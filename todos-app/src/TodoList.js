import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

const TodoList = () => {
  const [Todos, setTodos] = useState([
    { id: uuid(), task: 'Walk the dog' },
    { id: uuid(), task: 'Make breakfast' },
    { id: uuid(), task: 'Study coding' },
    { id: uuid(), task: 'Exercise' },
  ]);

  const addTodo = (task) => {
    const newTodo = { id: uuid(), task };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(Todos.filter((Todo) => Todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul className='TodoList'>
        {Todos.map((t) => (
          <Todo key={t.id} id={t.id} task={t.task} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
