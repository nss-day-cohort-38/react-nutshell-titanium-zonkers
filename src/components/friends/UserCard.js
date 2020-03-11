import React, { useState, useEffect, createRef } from "react";
import { Card, Button, Image, Icon, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./UserCard.css";
import APIManager from "../../modules/dbAPI";

const UserCard = ({ user, showAll, getEverything, history }) => {
  const contextRef = createRef();

  const [userInfo, setUserInfo] = useState(user);
  const [popIsOpen, setPopIsOpen] = useState(false);

  const handleClick = () => {
    if (userInfo.isFriend) {
      APIManager.deleteObjectByResource("friends", userInfo.friendId).then(
        getEverything
      );
    } else if (!userInfo.isFriend) {
      APIManager.postObjectByResource("friends", {
        userId: userInfo.id,
        active_userId: Number(sessionStorage.getItem("userId"))
      }).then(getEverything);
    }
  };

  const handleLinkClick = (e) => {
    APIManager.getFriends(e.target.id.split("--")[1]).then(data => {
      let isfriend = false;
      data.forEach(element => {
        if (element.userId === Number(sessionStorage.getItem("userId"))) {
          history.push(`/profile/${userInfo.username}`)
          isfriend = true;
        } 
      });

      if(!isfriend){
        setPopIsOpen(true)
        setTimeout(() => { setPopIsOpen(false)}, 2500)
      }
      // setUserInfo(userObj);
    });

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
      <Card>
        <Card.Content>
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
            compact
            color={userInfo.isFriend ? "red" : "green"}
            icon
          >
            <Icon
              name={userInfo.isFriend ? "user delete" : "add user"}
            />
          </Button>

          <Card.Header>
            <Popup
              context={contextRef}
              content={`@${userInfo.username} needs to add you as a friend first`}
              position="top center"
              open={popIsOpen}
            />

            <a id={`user--${userInfo.id}`} ref={contextRef} onClick={handleLinkClick}>
              {userInfo.first_name} {userInfo.last_name}{" "}
            </a>
          </Card.Header>
          <Card.Meta>@{userInfo.username}</Card.Meta>
        </Card.Content>
      </Card>
    </>
  );
};

export default UserCard;
