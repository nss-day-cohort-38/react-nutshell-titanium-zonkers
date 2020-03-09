import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const EventModal = ({
  modalIsOpen,
  updateEvents,
  isEditing,
  locationError,
  dateError,
  nameError,
  handleFieldChange,
  values,
  timeError,
  formValues,
  cancelEvent,
  isLoading
}) => {
  return (
    <Modal open={modalIsOpen}>
      <Modal.Header>{isEditing ? "Edit Event" : "Create Event"}</Modal.Header>
      <Modal.Content>
        <Form loading={isLoading}>
          <Form.Input
            placeholder="Name"
            id="name"
            type="text"
            label="Event Name"
            onChange={handleFieldChange}
            value={values.name}
            error={nameError}
          />
          <Form.Input
            placeholder="Date"
            id="date"
            type="date"
            label="Event Date"
            onChange={handleFieldChange}
            value={formValues.date}
            error={dateError}
          />

          <Form.Input
            placeholder="Time"
            id="time"
            label="Time"
            type="time"
            onChange={handleFieldChange}
            value={formValues.time}
            error={timeError}
          />
          <Form.Input
            placeholder="Location"
            id="location"
            label="Location"
            onChange={handleFieldChange}
            value={values.location}
            error={locationError}
          />
          <Button onClick={updateEvents}>{isEditing ? "Save" : "Add"}</Button>
          <Button onClick={cancelEvent}>Cancel</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EventModal;
