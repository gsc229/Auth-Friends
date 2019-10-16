import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = ({ addFriend }) => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  console.log('AddFriend.js friend: ', friend);
  const handleChanges = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={e => addFriend(e, friend)} action=''>
        <input
          onChange={handleChanges}
          value={friend.name}
          name='name'
          placeholder='Name'
          type='text'
        />
        <input
          onChange={handleChanges}
          value={friend.email}
          name='email'
          placeholder='Email'
          type='email'
        />
        <input
          onChange={handleChanges}
          value={friend.age}
          name='age'
          placeholder='Age'
          type='number'
        />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
