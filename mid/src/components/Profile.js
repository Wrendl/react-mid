import React, { useState } from 'react';
import { users } from '../data';

const Profile = () => {
  const [name, setName] = useState('Admin');
  const [age, setAge] = useState(20);

  const user = users;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSave = () => {
    console.log('Updated Name:', name);
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Name: {name}</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <p>Age: {age}</p>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      {/* <button onClick={handleSave}>Save</button> */}
    </div>
  );
};

export default Profile;
