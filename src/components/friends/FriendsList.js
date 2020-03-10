import React, { useEffect, useState } from "react";
import APIManager from "../../modules/dbAPI";
import UserCard from "./UserCard";
import { Card } from "semantic-ui-react";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getFriends = () => {
    APIManager.getFriends(sessionStorage.getItem("userId")).then(setFriends);
  };
  const getUsers = () => {
    APIManager.getUsers().then(setAllUsers);
  };
  const getEverything = () => {
    getFriends();
    getUsers();
  };
  useEffect(() => {
    getEverything();
  }, []);

  return (
    <Card.Group>
      {showAll
        ? allUsers.map(user => {
            if (user.id !== Number(sessionStorage.getItem("userId"))) {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  showAll={showAll}
                  getEverything={getEverything}
                />
              );
            }
          })
        : friends.map(user => (
            <UserCard
              key={user.id}
              user={user}
              showAll={showAll}
              getEverything={getEverything}
            />
          ))}
    </Card.Group>
  );
};

export default FriendsList;
