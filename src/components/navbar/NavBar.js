import React, { useState } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({}) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted id="navbar-container">
      <Menu inverted pointing secondary>
        <Menu.Item>
            <img src="https://emoji.slack-edge.com/T03F2SDTJ/handyandy/8378d8b808441ab4.jpg" />
          <Link className="nav-link" to="/home" activeClassName="active-link">
            <h1>Handy Andy</h1>
          </Link>
        </Menu.Item>
        <Menu.Item
          name="news"
          active={activeItem === "news"}
          onClick={handleItemClick}
        >
          <Link className="nav-link" to="/news" activeClassName="active-link">
            News
          </Link>
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        >
          <Link
            className="nav-link"
            to="/messages"
            activeClassName="active-link"
          >
            Messages
          </Link>
        </Menu.Item>
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        >
          <Link
            className="nav-link"
            to="/friends"
            activeClassName="active-link"
          >
            Friends
          </Link>
        </Menu.Item>
        <Menu.Item
          name="tasks"
          active={activeItem === "tasks"}
          onClick={handleItemClick}
        >
          <Link className="nav-link" to="/tasks" activeClassName="active-link">
            Tasks
          </Link>
        </Menu.Item>
        <Menu.Item
          name="events"
          active={activeItem === "events"}
          onClick={handleItemClick}
        >
          <Link className="nav-link" to="/events" activeClassName="active-link">
            Events
          </Link>
        </Menu.Item>
      </Menu>
      <div>
        <Button
          circular
          id="user-icon"
          disabled
          color="white"
          icon="user circle outline"
        />
      </div>
    </Segment>
  );
};

export default NavBar;
