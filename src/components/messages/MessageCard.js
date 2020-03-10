import React from "react"
import { Feed, Icon } from "semantic-ui-react"

const MessageCard = () => {
    return (
    <Feed.Event className="fullMessage">
      <Feed.Label>
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F1975nj.jpg&f=1&nofb=1' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    );
};

export default MessageCard