import React, { useState } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ history }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    history.push(`/${name}`);
    setActiveItem(name);
  };

  return (
    <Segment inverted id="navbar-container">
      <Menu inverted pointing secondary>
        <Menu.Item name="" onClick={handleItemClick}>
          <img src="https://emoji.slack-edge.com/T03F2SDTJ/handyandy/8378d8b808441ab4.jpg" />
          <h1>Handy Andy</h1>
        </Menu.Item>
        <Menu.Item
          name="news"
          active={activeItem === "news"}
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
      <div>
        <Button circular id="user-icon" disabled icon="user circle outline" />
      </div>
    </Segment>
  );
};

export default withRouter(NavBar);
