import React, { useEffect, createRef } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Settings.css';

const SettingsPasswordModal = ({
    passwordModalIsOpen,
    updateSettingsPassword,
    newPasswordError,
    oldPasswordError,
    handleFieldChange,
    cancelSettingsPassword,
    isLoading,
}) => {
    return (
        <Modal size="mini" open={passwordModalIsOpen}>
            <Modal.Header>Update Password</Modal.Header>
            <Modal.Content>
                <Form loading={isLoading}>
                    <Form.Input
                        placeholder="Old Password"
                        id="oldPassword"
                        type="password"
                        label="Old Password"
                        onChange={handleFieldChange}
                        error={oldPasswordError}
                    />
                    <Form.Input
                        placeholder="New Password"
                        id="password"
                        type="password"
                        label="New Password"
                        onChange={handleFieldChange}
                        error={newPasswordError}
                    />
                    <Form.Input
                        placeholder="Re-Enter New Password"
                        id="newPasswordReEnter"
                        type="password"
                        label="Re-Enter New Password"
                        onChange={handleFieldChange}
                        error={newPasswordError}
                    />
                    <Button onClick={updateSettingsPassword}>Update</Button>
                    <Button onClick={cancelSettingsPassword}>Cancel</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}


export default SettingsPasswordModal;