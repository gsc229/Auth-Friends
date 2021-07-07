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

  return (
    <div className='friends-list-container'>
      <h1>Fiend's List: </h1>
      <AddFriend setFriends={setFriends} />
      {friends.map(item => (
        <Friend key={item.id} setFriends={setFriends} friend={item} />
      ))}
    </div>
  );
};

export default FriendsList;
