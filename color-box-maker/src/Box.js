import './Box.css';

const Box = ({ id, color, width, height, removeBox }) => {
  const style = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`,
  };

  const handleRemove = (evt) => {
    removeBox(id);
  };

  return (
    <div className='Box'>
      <div data-testid='Box' style={style}></div>
      <button data-testid='Box-delete' onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default Box;
