import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ListOfNames() {
  const [names, setNames] = useState([
    { user: 'Joe', id: 1 },
    { user: 'Sam', id: 2 },
    { user: 'Alex', id: 3 },
  ]);
  const addName = () => {
    setNames([...names, { user: 'new song', id: uuidv4() }]);
  };
  return (
    <div className='list-of-names'>
      <ul>
        {names.map((name) => {
          return <li key={name.id}>{name.user}</li>;
        })}
      </ul>
      <button onClick={addName}>Add name</button>
    </div>
  );
}

export default ListOfNames;
