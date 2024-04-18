import React, { useState } from 'react';
import Nav from '../nav/Nav';
import './edit.css';

const Edit = () => {
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Edited Price:', price);
    console.log('Edited Name:', name);
    console.log('Edited Category:', category);
  };

  return (
    <div>
      <Nav />
      <div className="edit-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Price:</label>
            <input type="text" value={price} onChange={handlePriceChange} />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input type="text" value={category} onChange={handleCategoryChange} />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
