import React from 'react';
import Nav from '../nav/Nav';

const Create = () => {
  
  

  return (
    <div>
      <Nav />
      <div className="product-section">
        <h2>Create Product</h2>
        <form >
          <div>
            <label htmlFor="productName">Name:</label>
            <input
              type="text"
              id="productName"
            
            />
          </div>
          <div>
            <label htmlFor="productPrice">Price:</label>
            <input
              type="text"
              id="productPrice"
              
            />
          </div>
          <div>
            <label htmlFor="productCategory">Category:</label>
            <input
              type="text"
              id="productCategory"
              
            />
          </div>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
