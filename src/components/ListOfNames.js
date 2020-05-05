import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserInput from './UserInput';

function ListOfNames() {
  const [names, setNames] = useState([
    { user: 'Joe', id: 1 },
    { user: 'Sam', id: 2 },
    { user: 'Alex', id: 3 },
  ]);
  const addName = (user) => {
    setNames([...names, { user, id: uuidv4() }]);
  };
  return (
    <div className='list-of-names'>
      <ul>
        {names.map((name) => {
          return <li key={name.id}>{name.user}</li>;
        })}
      </ul>
      <UserInput addName={addName} />
    </div>
  );
}

export default ListOfNames;
