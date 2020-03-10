import React from "react";
import { Image } from "semantic-ui-react";

const ProfileHeader = ({userInfo}) => {
  return (
    <div id="profile-header">
      {" "}
      <div>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
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
