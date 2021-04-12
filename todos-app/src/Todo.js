import './Todo.css';

const Todo = ({ id, task, removeTodo }) => {
  const handleRemove = (evt) => {
    removeTodo(id);
  };

  const testId = task ? task.replace(/[^A-Z0-9]/gi, '_') : '';
  return (
    <li data-testid={`Todo-${testId}`} className='Todo'>
      <div className='Todo-task'>- {task}</div>
      <button data-testid={`Todo-delete-${testId}`} onClick={handleRemove}>
        x
      </button>
    </li>
  );
};

export default Todo;
