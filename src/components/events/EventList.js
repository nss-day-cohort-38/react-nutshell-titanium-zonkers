import React, { useEffect, useState } from "react";
import APIManager from "../../modules/dbAPI"

const EventList = () => {
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        APIManager.getObjectByResource("events", 1).then((data) => {
            console.log(data)
        })
    }


  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <p>These are the events</p>
    </>
  );
};

export default EventList;
