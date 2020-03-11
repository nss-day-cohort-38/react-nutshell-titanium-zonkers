import React, { useState } from "react";
import { Image } from "semantic-ui-react";

const ProfileHeader = ({userInfo}) => {
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [events, setEvents] = useState([]);
    const [news, setNews] = useState([]);

  return (
    <div id="profile-header">
      {" "}
      <div>
        <Image
          src={userInfo.image === "" ? "https://react.semantic-ui.com/images/wireframe/square-image.png" : userInfo.image}
          size="medium"
          circular
        />
      </div>
      <div>
          <p>@{userInfo.username}</p>
          <p>Add Description Here</p>
          <p>Add Description Here</p>
          <p>Add Link Here</p>
          <p>Add Followers, Following, Posts Here</p>
      </div>

    </div>
  );
};

export default ProfileHeader;
