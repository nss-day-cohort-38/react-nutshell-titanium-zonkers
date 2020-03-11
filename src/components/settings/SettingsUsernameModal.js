import React from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Settings.css';

const SettingsUsernameModal = ({
    usernameModalIsOpen,
    updateSettingsUsername,
    usernameError,
    handleFieldChange,
    userInfo,
    cancelSettingsUsername,
    isLoading
}) => {
    return (
        <Modal size="mini" open={usernameModalIsOpen}>
            <Modal.Header>Update Username</Modal.Header>
            <Modal.Header className=
            "current-username">Current Username: {userInfo.username}</Modal.Header>
            <Modal.Content>
                <Form loading={isLoading}>
                    <Form.Input
                    placeholder="New Username"
                    id="username"
                    type="text"
                    label="New Username"
                    onChange={handleFieldChange}
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