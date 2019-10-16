import React from 'react';

const Friend = ({ friend }) => {
  const { id, name, age, email } = friend;
  return (
    <div className='friend-container'>
      <h1>{name}</h1>
      <h4>{age}</h4>
    </div>
  );
};

export default Friend;
