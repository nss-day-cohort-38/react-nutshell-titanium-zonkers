import React from "react";
import EventList from "../events/EventList"
import NewsArticleList from "../news/NewsArticleList"

const ProfileBodyContent = ({ activeItem }) => {
  return (
    <>
      <div>
        {activeItem === "events" && <EventList isFriend={true} userId={Number(sessionStorage.getItem("userId"))} />}
      </div>
      <div>
        {activeItem === "news" && <NewsArticleList isFriend={true} userId={Number(sessionStorage.getItem("userId"))} />}
      </div>
    </>
  );
};

export default ProfileBodyContent;
