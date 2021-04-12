import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const intialState = {
    task: '',
  };
  const [formData, setFormData] = useState(intialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { task } = formData;
    addTodo(task);
    setFormData(intialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='task'>Task:</label>
        <input
          id='task'
          name='task'
          value={formData.task}
          onChange={handleChange}
          placeholder='Enter a task'
        />
      </div>
      <button>Add New</button>
    </form>
  );
};

export default NewTodoForm;
