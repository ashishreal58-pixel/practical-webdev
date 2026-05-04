import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // Defining the 3 required variables (using state for flexibility)
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState('Photography');

  // Defining additional required data types
  const dataArray = ['Reading', 'Cycling', 'Coding'];
  const dataStr = 'Hello World';
  const dataNum = 2026;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Parent Component</h1>
      <p>Passing data to child...</p>
      
      {/* Passing variables as props */}
      <ChildComponent 
        name={name}
        age={age}
        hobby={hobby}
        arr={dataArray}
        str={dataStr}
        number={dataNum}
      />
    </div>
  );
};

export default ParentComponent;
