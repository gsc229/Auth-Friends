import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = ({ setFriends }) => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChanges = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const addFriend = (e, obj) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (obj.name && obj.email && obj.age) {
      axiosWithAuth()
        .post('/api/friends', obj, token)
        .then(res => {
          setFriends(res.data);
          console.log('AddFriend.js addFriend() res: ', res);
          resetFriend();
        })
        .catch(err => console.log('AddFriend.js addFriend() res: ', err));
    } else alert('All fields required!');

    console.log('AddFried.js addFriend() token: ', token);
    console.log('AddFried.js addFriend() obj: ', obj);
  };

  const resetFriend = () => {
    setFriend({
      name: '',
      age: '',
      email: ''
    });
  };

  console.log('AddFriend.js friend: ', friend);

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
