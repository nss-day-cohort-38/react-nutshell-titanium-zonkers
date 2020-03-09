import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import APIManager from "../../modules/dbAPI";
import EventModal from "./EventModal";
import { Button } from "semantic-ui-react";
import * as moment from "moment";
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
  const [formValues, setFormValues] = useState({ date: "00/00/000", time: "00:00" });
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
    ).then(data => {
      const sortedData = data.sort((a, b) => {
        return a.isoTime < b.isoTime ? -1 : a.isoTime > b.isoTime ? 1 : 0;
      });

      setEvents(sortedData);
    });
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleFormSubmit = () => {
    if (
      values.location !== "" &&
      formValues.date !== "" &&
      values.name !== "" &&
      formValues.time !== ""
    ) {
      setFormIsValid(true);
      if (!isEditing) {
        APIManager.postObjectByResource("events", values).then(() => {
          getEvents();
          toggleModal();
          setValues({
            name: "",
            location: "",
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
            isoTime: "",
            location: "",
            userId: Number(sessionStorage.getItem("userId"))
          });
          setIsEditing(false);
        });
      }
    } else {
      console.log("error");
      if (values.name === "") {
        setNameError({
          content: "Please enter a name",
          pointing: "below"
        });
      }

      if (formValues.date === "") {
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

      if (formValues.time === "") {
        setTimeError({
          content: "Please enter a time",
          pointing: "below"
        });
      }
    }
  };

  const handleFieldChange = evt => {
    const fieldId = evt.target.id;
    if (fieldId === "date" || fieldId === "time") {
      const changeValue = { ...formValues };
      const fieldValue = evt.target.value;
      changeValue[fieldId] = fieldValue;
      if (fieldId === "date") {
        if (fieldValue.length < 1) {
          setFormIsValid(false);
          setDateError({
            content: "Please enter a date",
            pointing: "below"
          });
        } else {
          changeValue["isoTime"] = `${fieldValue}T${formValues.time}`;
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
          const date = formValues.date; //Sec
          changeValue["isoTime"] = `${date}T${timeSplit.join(":")}`;
          changeValue[fieldId] = fieldValue.split(":").join(":");
          setTimeError(false);
        }
      }
      setFormValues(changeValue);
    } else {
      const changeValue = { ...values };
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
      }
      setValues(changeValue);
    }
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
      setFormValues({date: data.isoTime.split("T")[0],time:data.isoTime.split("T")[1]});
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
        formValues={formValues}
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
