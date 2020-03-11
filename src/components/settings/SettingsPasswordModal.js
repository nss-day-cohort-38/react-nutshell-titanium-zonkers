import React, { useEffect, createRef } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Settings.css';

function SettingsPasswordModal({
    passwordModalIsOpen,
    updateSettingsPassword,
    newPasswordError,
    oldPasswordError,
    handleFieldChange,
    cancelSettingsPassword,
    isLoading,
    oldPasswordNode
}) {

    const inputRef = createRef()
    
    useEffect(() => {
        console.log(inputRef.current)
    }, [])
    
    return (
        <Modal size="mini" open={passwordModalIsOpen}>
            <Modal.Header>Update Password</Modal.Header>
            <Modal.Content>
                <Form loading={isLoading}>
                    <Form.Input
                        ref={inputRef}
                        placeholder="Old Password"
                        id="oldPassword"
                        type="text"
                        label="Old Password"
                        onChange={handleFieldChange}
                        error={oldPasswordError}
                    />
                    <Form.Input
                        // ref={ref.newPasswordNode}
                        placeholder="New Password"
                        id="password"
                        type="text"
                        label="New Password"
                        onChange={handleFieldChange}
                        error={newPasswordError}
                    />
                    <Form.Input
                        // ref={ref.newPasswordReEnterNode}
                        placeholder="Re-Enter New Password"
                        id="passwordReEnter"
                        type="text"
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