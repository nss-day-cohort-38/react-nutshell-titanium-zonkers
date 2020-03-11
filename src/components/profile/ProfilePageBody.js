import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import ProfileBodyContent from "./ProfileBodyContent";

const ProfileBody = () => {
  const [activeItem, setActiveItem] = useState("everything");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <>
      <Menu pointing secondary>
        
        <Menu.Item
          name="events"
          active={activeItem === "events"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="news"
          active={activeItem === "news"}
          onClick={handleItemClick}
        />
      </Menu>
      {activeItem === "events" && <ProfileBodyContent activeItem={activeItem} /> }
      {activeItem === "news" && <ProfileBodyContent activeItem={activeItem} /> }
    </>
  );
};

export default ProfileBody;
