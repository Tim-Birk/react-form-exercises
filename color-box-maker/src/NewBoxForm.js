import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const intialState = {
    color: '',
    width: '',
    height: '',
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
    const { color, width, height } = formData;
    addBox(color, width, height);
    setFormData(intialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='color'>Color:</label>
        <input
          id='color'
          name='color'
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='width'>Width:</label>
        <input
          type='number'
          id='width'
          name='width'
          value={formData.width}
          onChange={handleChange}
        />
        <span>px</span>
      </div>
      <div>
        <label htmlFor='height'>Height:</label>
        <input
          type='number'
          id='height'
          name='height'
          value={formData.height}
          onChange={handleChange}
        />
        <span>px</span>
      </div>
      <button>Add New</button>
    </form>
  );
};

export default NewBoxForm;
