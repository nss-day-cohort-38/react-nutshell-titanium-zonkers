import React from "react";
import EventList from "../events/EventList"

const ProfileBodyContent = ({ activeItem }) => {
  return (
    <div>
      {activeItem === "events" && <EventList isFriend={true} userId={Number(sessionStorage.getItem("userId"))} />}
    </div>
  );
};

export default ProfileBodyContent;
