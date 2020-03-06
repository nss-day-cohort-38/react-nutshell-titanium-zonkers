import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Input } from "semantic-ui-react";

const EventModal = ({
  isOpen,
  updateEvents,
  header,
  isEditing,
  locationError,
  dateError,
  nameError,
  handleFieldChange,
  values,
  cancelEvent,
  isLoading
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>{header}</Modal.Header>
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
            value={values.date}
            error={dateError}
          />

          <Form.Input
            placeholder="Location"
            id="location"
            label="Location"
            onChange={handleFieldChange}
            value={values.location}
            error={locationError}
          />
          <Button onClick={updateEvents}>
            {isEditing ? "Edit Event" : "Add Event"}
          </Button>
          <Button onClick={cancelEvent}>
            Cancel
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EventModal;
