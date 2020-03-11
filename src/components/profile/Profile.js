import React, { useEffect, useState } from "react";
import APIManager from "../../modules/dbAPI";
import ProfileHeader from "./ProfilePageHeader";
import ProfileBody from "./ProfilePageBody";
import "./Profile.css";

const Profile = ({ user }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    APIManager.getUsers().then(data => {
      let userObj = {};
      data.forEach(dataUser => {
        if (user === dataUser.username) {
          setUserInfo(dataUser);
          userObj = dataUser;
        }
      });

      APIManager.getFriends(userObj.id).then(data => {
        data.forEach(element => {
          if (element.userId === Number(sessionStorage.getItem("userId"))) {
            setShowInfo(true);
          }
        });
      });
    });
  }, []);
  return (
    <>
      {showInfo ? (
        <div id="profile-page">
          <ProfileHeader userInfo={userInfo}/>
          <ProfileBody userInfo={userInfo}/>
        </div>
      ) : (
        "You are not friends with this person"
      )}
    </>
  );
};

export default Profile;
