import React, { useEffect, useState } from "react";
import APIManager from "../../modules/dbAPI";
import FriendsCard from "./FriendsCard";

const FriendsList = () => {
  const [allusers, setAllUsers] = useState([]);
  const [userFriends, setUserFriends] = useState([]);

  const getUsers = () => {
    APIManager.getUsers().then((data) => {
        console.log(data);
        setAllUsers(data);

    });
  };

  const getUserFriends = () => {
    
  }

  useEffect(() => {
    getUsers();
    getUserFriends();
  }, []);
  return (
    <div>
      {allusers.map(
        user =>
          user.id !== Number(sessionStorage.getItem("userId")) && (
            <FriendsCard key={user.id} user={user} />
          )
      )}
    </div>
  );
};

export default FriendsList;
