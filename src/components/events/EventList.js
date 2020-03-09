import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import APIManager from "../../modules/dbAPI";
import EventModal from "./EventModal";
import { Button } from "semantic-ui-react";
import "./EventList.css";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [locationError, setLocationError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    date: "",
    time: "",
    isoTime: "",
    location: "",
    userId: Number(sessionStorage.getItem("userId"))
  });
  const [formIsValid, setFormIsValid] = useState(false, () => formIsValid);

  const getEvents = () => {
    APIManager.getObjectByResourceNoExpand(
      "events",
      Number(sessionStorage.getItem("userId"))
    ).then(setEvents);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleFormSubmit = () => {
    if (
      values.location !== "" &&
      values.date !== "" &&
      values.name !== "" &&
      values.time !== ""

    ) {
      setFormIsValid(true);
      if (!isEditing) {
        APIManager.postObjectByResource("events", values).then(() => {
          getEvents();
          toggleModal();
          setValues({
            name: "",
            date: "",
            location: "",
            time: "",
            isoTime: "",
            userId: Number(sessionStorage.getItem("userId"))
          });
        });
      } else if (isEditing) {
        APIManager.editResource("events", values).then(() => {
          getEvents();
          toggleModal();
          setValues({
            name: "",
            date: "",
            time: "",
            isoTime: "",
            location: "",
            userId: Number(sessionStorage.getItem("userId"))
          });
          setIsEditing(false);
        });

      }
    } else {
        console.log("error")
      if (values.name === "") {
        setNameError({
          content: "Please enter a name",
          pointing: "below"
        });
      }

      if (values.date === "") {
        setDateError({
          content: "Please enter a date",
          pointing: "below"
        });
      }

      if (values.location === "") {
        setLocationError({
          content: "Please enter a location",
          pointing: "below"
        });
      }

      if (values.time === "") {
        setTimeError({
          content: "Please enter a time",
          pointing: "below"
        });
      }
    }
  };

  const handleFieldChange = evt => {
    const changeValue = { ...values };
    const fieldId = evt.target.id;
    const fieldValue = evt.target.value;
    changeValue[fieldId] = fieldValue;
    if (fieldId === "name") {
      if (fieldValue.length < 1) {
        setFormIsValid(false);
        setNameError({
          content: "Please enter a name",
          pointing: "below"
        });
      } else {
        setNameError(false);
      }
    } else if (fieldId === "location") {
      setFormIsValid(false);

      if (fieldValue.length < 1) {
        setFormIsValid(false);

        setLocationError({
          content: "Please enter a location",
          pointing: "below"
        });
      } else {
        setLocationError(false);
      }
    } else if (fieldId === "date") {
      if (fieldValue.length < 1) {
        setFormIsValid(false);
        setDateError({
          content: "Please enter a date",
          pointing: "below"
        });
      } else {
        changeValue["isoTime"] = `${fieldValue}T${values.time}`;
        setDateError(false);
      }
    } else if (fieldId === "time") {
      if (fieldValue.length < 1) {
        setFormIsValid(false);
        setTimeError({
          content: "Please enter a time",
          pointing: "below"
        });
      } else {
        const timeSplit = fieldValue.split(":");
        const date = values.date; //Sec
        changeValue["isoTime"] = `${date}T${timeSplit.join(":")}`;
        changeValue[fieldId] = fieldValue.split(":").join(":");
        setTimeError(false);
      }
    }
    setValues(changeValue);
  };

  const cancelEvent = () => {
    setValues({
      name: "",
      date: "",
      time: "",
      isoTime: "",
      location: "",
      userId: Number(sessionStorage.getItem("userId"))
    });
    setIsEditing(false);
    toggleModal();
  };

  const deleteEvent = id => {
    APIManager.deleteObjectByResource("events", id).then(getEvents);
  };

  const editEvent = id => {
    setIsLoading(true);
    setIsEditing(true);
    toggleModal();
    APIManager.fetchObjectById("events", id).then(data => {
      setValues(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Button onClick={toggleModal}>Add Event</Button>
      <EventModal
        modalIsOpen={modalIsOpen}
        updateEvents={handleFormSubmit}
        isEditing={isEditing}
        locationError={locationError}
        timeError={timeError}
        nameError={nameError}
        dateError={dateError}
        handleFieldChange={handleFieldChange}
        values={values}
        cancelEvent={cancelEvent}
        isLoading={isLoading}
        setIsEditing={setIsEditing}
      />
      <div id="events-card-container">
        {events.map((item, i) => (
          <EventCard
            key={i}
            cardNumber={i}
            item={item}
            editEvent={editEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    </>
  );
};

export default EventList;
