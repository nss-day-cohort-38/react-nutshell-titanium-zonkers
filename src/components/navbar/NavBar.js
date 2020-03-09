import React, { useState } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ history }) => {
  const [activeItem, setActiveItem] = useState("home");

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleItemClick = (e, { name }) => {
    history.push(`/${name}`);
    setActiveItem(name);
  };

  return (
    <Segment inverted id="navbar-container">
      <Menu inverted pointing secondary id="menu-one">
        <Menu.Item name="" onClick={handleItemClick} id="navbar-logo-title">
          <img id="logo" src={require("./handyandy.svg") } alt="handyandy" />
          <h1 id="navbar-title">Handy Andy</h1>
        </Menu.Item>
        <Menu.Item
          name="newsArticles"
          active={activeItem === "newsArticles"}
          onClick={handleItemClick}
        >
          News
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        >
          Messages
        </Menu.Item>
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        >
          Friends
        </Menu.Item>
        <Menu.Item
          name="tasks"
          active={activeItem === "tasks"}
          onClick={handleItemClick}
        >
          Tasks
        </Menu.Item>
        <Menu.Item
          name="events"
          active={activeItem === "events"}
          onClick={handleItemClick}
        >
          Events
        </Menu.Item>
      </Menu>
      <Menu pointing secondary vertical>
        <Menu.Item
          // onClick={handleItemClick}
          id="user-icon-container"
        >
          <Button 
          circular 
          id="user-icon" 
          icon="user circle outline" />
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default withRouter(NavBar);
