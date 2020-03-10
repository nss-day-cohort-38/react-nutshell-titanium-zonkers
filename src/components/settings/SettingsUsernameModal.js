import React from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';

const SettingsUsernameModal = ({
    modalIsOpen,
    updateSettingsUsername,
    usernameError,
    handleFieldChange,
    values,
    cancelSettingsUsername,
    isLoading
}) => {
    return (
        <Modal open={modalIsOpen}>
            <Modal.Header>Update Username</Modal.Header>
            <Modal.Descripsion>Current Username: {values.username}</Modal.Descripsion>
            <Modal.Content>
                <Form loading={isLoading}>
                    <Form.Input
                    placeholder="New Username"
                    id="username"
                    type="text"
                    label="New Username"
                    onChange={handleFieldChange}
                    value={values.username}
                    error={usernameError}
                    />
                    <Button onClick={updateSettingsUsername}>Update</Button>
                    <Button onClick={cancelSettingsUsername}>Cancel</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SettingsUsernameModal;