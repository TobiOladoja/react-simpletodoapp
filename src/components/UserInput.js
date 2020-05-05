import React, { useState } from 'react';

function UserInput({ addName }) {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addName(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Person Name: </label>
      <input type='text' value={user} required onChange={handleChange} />
      <input type='submit' value='add song' />
    </form>
  );
}

export default UserInput;
