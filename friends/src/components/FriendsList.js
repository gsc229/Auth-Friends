import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

const FriendsList = props => {
  const [friends, setFriends] = useState([{}]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //fetch data from the server
    // the data is protected behind a token
    // so our request needs to include an 'Authorization: token' header
    //TODO: Fetch this data - '/api/data' = and add the array of gas prices to state console.log('FriendsList.js aWA .get res', res);
    console.log('FriendsList.js friends:', friends);

    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        setFriends(res.data);
        console.log('FriendsList.js aWA .get res', res.data);
      })
      .catch(err => console.log('FriendsList.js aWA .get err', err));
  };
  const addFriend = (e, obj) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (obj.name && obj.email && obj.age) {
      axiosWithAuth()
        .post('/api/friends', obj, token)
        .then(res => {
          setFriends(res.data);
          console.log('FriendsList.js via AddFriend.js addFriend() res: ', res);
        })
        .catch(err =>
          console.log('FriendsList.js via AddFriend.js addFriend() res: ', err)
        );
    } else alert('All fields required!');

    console.log('FriendsList.js via AddFried.js addFriend() token: ', token);
    console.log('FriendsList.js via AddFried.js addFriend() obj: ', obj);
  };

  return (
    <div className='friends-list-container'>
      <h1>Fiend's List: </h1>
      <AddFriend addFriend={addFriend} />
      {friends.map(item => (
        <Friend key={item.id} friend={item} />
      ))}
    </div>
  );
};

export default FriendsList;
