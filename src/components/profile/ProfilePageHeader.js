import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import APIManager from "../../modules/dbAPI"

const ProfileHeader = ({ userInfo }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  const getFollowers = () => {
    APIManager.getFriends(userInfo.id).then(setFollowers);
  };

  const getFollowing = () => {
    APIManager.getItemByResource(`friends?userId=${userInfo.id}`).then(setFollowing)
  };



  useState(() => {
    getFollowers();
    getFollowing();
  }, []);

  return (
    <div id="profile-header">
      {" "}
      <div>
        <Image
          src={
            userInfo.image === "" || !userInfo.image
              ? "https://react.semantic-ui.com/images/wireframe/square-image.png"
              : userInfo.image
          }
          size="medium"
          circular
        />
      </div>
      <div id="user-profile-information">
        <h3>@{userInfo.username}</h3>
        <h2>Has Approved {followers.length} Viewers </h2>
        <h2>Aproved by {following.length} Users</h2>
      </div>
    </div>
  );
};

export default ProfileHeader;
