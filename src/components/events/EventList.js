import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import APIManager from "../../modules/dbAPI";

const EventList = () => {
  const [events, setEvents] = useState([
    {
      name: "Project Report - April",
      date: "01/02/90",
      location: "Nashville, TN"
    }
  ]);


  const getEvents = () => {
    APIManager.getObjectByResourceNoExpand("events", 1).then(setEvents);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      {events.map((item, i) => (
        <EventCard key={i} item={item} />
      ))}
    </>
  );
};

export default EventList;
