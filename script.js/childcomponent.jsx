import React from 'react';

// Receive props from the parent
const ChildComponent = ({ name, age, hobby, arr, str, number }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>
      <h2>Child Component</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Hobby:</strong> {hobby}</p>
      <p><strong>String:</strong> {str}</p>
      <p><strong>Number:</strong> {number}</p>
      <p><strong>Array:</strong> {arr.join(', ')}</p>
    </div>
  );
};

export default ChildComponent;

