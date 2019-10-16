import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({ friend, setFriends }) => {
  const { id, name, age, email } = friend;
  const [thisFriend, setThisFriend] = useState({
    id: id,
    name: name,
    email: email,
    age: age
  });
  const [editing, setEditing] = useState(false);
  console.log(editing);
  /* ========= deleteFriend ========= */

  const deleteFriend = () => {
    const token = localStorage.getItem('token');
    const confirm = window.confirm(
      'Are you sure you want to delete this friend?'
    );
    if (confirm) {
      axiosWithAuth()
        .delete(`/api/friends/${id}`, friend, token)

        .then(res => {
          setFriends(res.data);
          console.log('Friend.js delete res', res);
        })
        .catch(err => alert(err.response.data.error));
    }
  };
  /* ====== editThisFriend ================ */
  const editThisFriend = () => {
    const token = localStorage.getItem('token');
    axiosWithAuth()
      .put(`/api/friends/${id}`, thisFriend, token)
      .then(res => {
        setFriends(res.data);
        setEditing(false);
      })
      .catch(err => alert(err.response.data.error));
  };
  /* ======== handleChanges ================== */
  const handleChanges = e => {
    setThisFriend({
      ...thisFriend,
      [e.target.name]: e.target.value
    });
  };
  console.log('Friend.js thisFriend: ', thisFriend);

  if (editing) {
    return (
      <div key={id} className='friend-container'>
        <h1>{name}</h1>
        <h4>{age}</h4>
        <form action=''>
          <input
            onChange={handleChanges}
            value={thisFriend.name}
            name='name'
            placeholder='Name'
            type='text'
          />
          <input
            onChange={handleChanges}
            value={thisFriend.email}
            name='email'
            placeholder='Email'
            type='email'
          />
          <input
            onChange={handleChanges}
            value={thisFriend.age}
            name='age'
            placeholder='Age'
            type='number'
          />
        </form>
        <button onClick={editThisFriend}>Done Editing</button>
      </div>
    );
  } else {
    return (
      <div className='friend-container'>
        <h1>{name}</h1>
        <h4>{age}</h4>
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={deleteFriend}>
          I don't want to be friends with this person anymore
        </button>
      </div>
    );
  }
};

export default Friend;
