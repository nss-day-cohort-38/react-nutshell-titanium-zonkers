import React, { useEffect, useState } from "react";
import APIManager from "../../modules/dbAPI";
import UserCard from "./UserCard";
import { Card } from "semantic-ui-react";
import { Dimmer, Loader } from "semantic-ui-react";
import "./FriendsList.css";

const FriendsList = ({ searchQuery, showAll, history }) => {
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [queryUsers, setQueryUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFriends = () => {
    return APIManager.getFriends(sessionStorage.getItem("userId")).then(
      setFriends
    );
  };

  const getUsers = () => {
    return APIManager.getUsers().then(setAllUsers);
  };

  const getQueryUsers = () => {
    setIsLoading(true);
    return APIManager.searchUsers("username", searchQuery).then(data => {
      setQueryUsers(data);
      getEverything();
      setIsLoading(false);
    });
  };

  const getEverything = () => {
    setIsLoading(true);
    getFriends().then(() => {
      getUsers().then(() => setIsLoading(false));
    });
  };

  useEffect(() => {
    getEverything();
  }, []);

  useEffect(() => {
    getQueryUsers().then(() => setIsLoading(false));
  }, [searchQuery]);

  

  return (
    <Card.Group id="friend-cards">
      <Card.Header>
        {history.location.pathname !== "/users" &&
          (searchQuery === ""
            ? showAll
              ? "Showing All Users"
              : "Showing Friends"
            : `Showing results for @${searchQuery}`)}
      </Card.Header>
      {/* <Dimmer active={isLoading} inverted>
        <Loader />
      </Dimmer> */}
      {searchQuery === ""
        ? showAll
          ? allUsers.map(user => {
              if (user.id !== Number(sessionStorage.getItem("userId"))) {
                return (
                  <UserCard
                    key={user.id}
                    user={user}
                    showAll={showAll}
                    getEverything={getEverything}
                    history={history}
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
                history={history}
              />
            ))
        : queryUsers.map(user => {
            if (user.id !== Number(sessionStorage.getItem("userId"))) {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  showAll={showAll}
                  getEverything={getQueryUsers}
                  history={history}
                />
              );
            }
          })}
    </Card.Group>
  );
};

export default FriendsList;
