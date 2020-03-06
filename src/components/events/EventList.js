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
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    date: "",
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
    if (values.location !== "" && values.date !== "" && values.name !== "") {
      setFormIsValid(true);
      if (!isEditing) {
        APIManager.postObjectByResource("events", values).then(() => {
          getEvents();
          toggleModal();
          setValues({
            name: "",
            date: "",
            location: "",
            userId: Number(sessionStorage.getItem("userId"))
          });
        });
      } else if (isEditing) {
        APIManager.editResource("events", values).then(() => {
          getEvents();
          toggleModal();
        });
      }
    } else {
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
        setDateError(false);
      }
    }
    setValues(changeValue);
  };

  const cancelEvent = () => {
    setValues({
      name: "",
      date: "",
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
