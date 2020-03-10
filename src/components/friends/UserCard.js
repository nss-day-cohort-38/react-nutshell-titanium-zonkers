import React, { useState, useEffect } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import "./UserCard.css";
import APIManager from "../../modules/dbAPI";

const UserCard = ({ user, showAll, getEverything }) => {
  const [userInfo, setUserInfo] = useState(user);

  const handleClick = () => {
    if (userInfo.isFriend) {
      APIManager.deleteObjectByResource("following", userInfo.friendId).then(
        getEverything
      );
    } else if(showAll){
      APIManager.postObjectByResource("following", {
        userId: userInfo.id,
        active_userId: Number(sessionStorage.getItem("userId"))
      }).then(getEverything);
    }
  };
  useEffect(() => {
    if (user.user) {
        const userObj = { ...user.user };
        userObj.isFriend = true;
        userObj.friendId = user.id;
      setUserInfo(userObj);
    } else {
      const userObj = { ...user };
      APIManager.getFriends(sessionStorage.getItem("userId")).then(data => {
        userObj.isFriend = false;
        data.forEach(element => {
          if (element.user.id === userObj.id) {
            userObj.isFriend = true;
            userObj.friendId = element.id;
          }
        });
        setUserInfo(userObj);
      });
    }
  }, [user]);

  return (
    <>
      {" "}
      <Card>
        <Card.Content>
          {/* <div className="user-card-info"> */}
          <Image
            floated="left"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />

          <Button
            onClick={handleClick}
            floated="right"
            size="mini"
            basic
            color="green"
          >
            {userInfo.isFriend || !showAll ? "Unfollow" : "Follow"}
          </Button>

          <Card.Header>
            {userInfo.first_name} {userInfo.last_name}{" "}
          </Card.Header>
          <Card.Meta>@{userInfo.username}</Card.Meta>
          {/* </div> */}
          {/* <div className="user-card-follow-button"> */}

          {/* </div> */}
        </Card.Content>
      </Card>
    </>
  );
};

export default UserCard;
