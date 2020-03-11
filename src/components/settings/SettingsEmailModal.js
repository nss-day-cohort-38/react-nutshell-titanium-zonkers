import React from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Settings.css';

const SettingsEmailModal = ({
    emailModalIsOpen,
    updateSettingsEmail,
    emailError,
    handleFieldChange,
    userInfo,
    cancelSettingsEmail,
    isLoading
}) => {
    return (
        <Modal size="mini" open={emailModalIsOpen}>
            <Modal.Header>Update Email</Modal.Header>
            <Modal.Header className=
            "current-email">Current Email: {userInfo.email}</Modal.Header>
            <Modal.Content>
                <Form loading={isLoading}>
                    <Form.Input
                    placeholder="New Email"
                    id="email"
                    type="text"
                    label="New Email"
                    onChange={handleFieldChange}
                    error={emailError}
                    />
                    <Button onClick={updateSettingsEmail}>Update</Button>
                    <Button onClick={cancelSettingsEmail}>Cancel</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SettingsEmailModal;