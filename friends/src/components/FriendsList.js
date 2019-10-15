import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {
  const [friends, setFriends] = useState([{}]);

  const getData = () => {
    //fetch data from the server
    // the data is protected behind a token
    // so our request needs to include an 'Authorization: token' header
    //TODO: Fetch this data - '/api/data' = and add the array of gas prices to state console.log('FriendsList.js aWA .get res', res);

    useEffect(() => {
      getData();
    }, []);

    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        /* setFriends(res.data); */
        console.log('FriendsList.js aWA .get res', res.data);
      })
      .catch(err => console.log('FriendsList.js aWA .get err', err));
  };

  return (
    <div className='friends-list-container'>
      <h1>Fiend's List: </h1>
    </div>
  );
};

export default FriendsList;
