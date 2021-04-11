import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
import './BoxList.css';

const BoxList = () => {
  const [boxes, setBoxes] = useState([
    { id: uuid(), color: 'green', width: 100, height: 115 },
    { id: uuid(), color: 'yellow', width: 90, height: 85 },
    { id: uuid(), color: 'red', width: 190, height: 185 },
    { id: uuid(), color: 'black', width: 175, height: 140 },
  ]);

  const addBox = (color, width, height) => {
    const newBox = { id: uuid(), color, width, height };
    setBoxes((oldBoxes) => [...oldBoxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <>
      <h1>Box List</h1>
      <NewBoxForm addBox={addBox} />
      <div className='BoxList'>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            color={box.color}
            width={box.width}
            height={box.height}
            removeBox={removeBox}
          />
        ))}
      </div>
    </>
  );
};

export default BoxList;
