import React, { useState, useEffect } from "react";
import { Menu, Segment, Button, Popup } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ history }) => {
  const [activeItem, setActiveItem] = useState("home");

  const [menuIsOpen, setMenuIsOpen] = useState(false)

 useEffect(() => {
   console.log(history.location.pathname.split("/")[1])
  setActiveItem(history.location.pathname.split("/")[1])
 }, [])

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
};

  const handleItemClick = (e, { name }) => {
    history.push(`/${name}`);
    setActiveItem(name);
  };

  const logout = () => {
    sessionStorage.clear();
    history.push("/");
    toggleMenu();
  }

  return (
    <Segment inverted id="navbar-container">
      <Menu inverted pointing secondary id="menu-one">
        <Menu.Item name="" onClick={handleItemClick} id="navbar-logo-title">
          <img id="logo" src={require("./handyandy.svg")} alt="handyandy" />
          <h1 id="navbar-title">Handy Andy</h1>
        </Menu.Item>
        {sessionStorage.getItem('userId') !== null
        ? <Menu.Item
          id="news-nav-link"
          name="newsArticles"
          active={activeItem === "newsArticles"}
          onClick={handleItemClick}
        >
          News
        </Menu.Item>
        : null }
        {sessionStorage.getItem('userId') !== null
        ? <Menu.Item
          name="events"
          active={activeItem === "events"}
          onClick={handleItemClick}
        >
          Events
        </Menu.Item>
        : null }
        {sessionStorage.getItem('userId') !== null
        ? <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        >
          Friends
        </Menu.Item>
        : null }
        {sessionStorage.getItem('userId') !== null
        ? <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        >
          Messages
        </Menu.Item>
        : null }
      </Menu>
      {sessionStorage.getItem('userId') !== null
      ? <Menu inverted>
        <Menu.Item
          id="user-icon-container"
        >
          <Popup 
          position="top right"
            wide
            trigger={
              <Button
                circular
                id="user-icon"
                icon="user circle outline"
                onClick={() => {
                  toggleMenu();
                }} />
            }
            on="click"
            open={menuIsOpen}
          >
            <Menu size="mini" inverted vertical>
              <Menu.Item
                id="myProfile"
                active={activeItem === "myProfile"}
                onClick={handleItemClick}
              >
                My Profile
        </Menu.Item>
        <Menu.Item
                id="settings"
                active={activeItem === "settings"}
                onClick={() => {
                  history.push("/settings");
                  toggleMenu();
                }}
              >
                Settings
        </Menu.Item>
        <Menu.Item
                id="logout"
                active={activeItem === "logout"}
                onClick={logout}
              >
                Logout
        </Menu.Item>
            </Menu>
          </Popup>
        </Menu.Item>
      </Menu>
      : null }
    </Segment>
  );
};

export default withRouter(NavBar);
