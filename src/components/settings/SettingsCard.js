import React, { useState, useEffect } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import SettingsUsernameModal from './SettingsUsernameModal';
import dbAPI from '../../modules/dbAPI';
import './Settings.css';

const SettingsCard = (props) => {

    const activeUserId = parseInt(sessionStorage.getItem("userId"));

    const [users, setUsers] = useState([]);
    const [usernameModalIsOpen, setUsernameModalIsOpen] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [usernameFormIsValid, setUsernameFormIsValid] = useState(false, () => usernameFormIsValid);
    const [newUsername, setNewUsername] = useState({})

    const [values, setValues] = useState({
        "id": activeUserId,
        "username": "",
        "email": "",
        "password": "",
        "isActive": true,
        "first_name": "",
        "last_name": ""
    });

    const getUser = () => {
        return dbAPI.fetchObjectById("users", activeUserId).then(setValues);
    };

    useEffect(() => {
        getUser();
    }, []);

    const toggleUsernameModal = () => {
        setUsernameModalIsOpen(!usernameModalIsOpen);
    };

    const handleFormSubmit = (evt) => {
        if (evt.target.id === "username") {
            const usernames = users.filter(user => {
                if (newUsername === user.username) {
                    if (usernames.length !== 0) {
                        setUsernameFormIsValid(false);
                        setUsernameError({
                            content: "Username already taken!",
                            pointing: "below"
                        })
                    }
                } else {
                    const editedUserInfo = {
                        "id": activeUserId,
                        "username": values.newUsername,
                        "email": values.email,
                        "password": values.password,
                        "isActive": true,
                        "first_name": values.first_name,
                        "last_name": values.last_name
                    }

                    dbAPI.putObjectByResource("users", editedUserInfo).then(() => {
                        getUser();
                        toggleUsernameModal();
                        setValues({
                            "id": activeUserId,
                            "username": "",
                            "email": "",
                            "password": "",
                            "isActive": true,
                            "first_name": "",
                            "last_name": ""
                        })
                    })
                }
            })
        }
    }

    const handleFieldChange = evt => {
        const changeValue = { ...values };
        const fieldId = evt.target.id;
        let fieldValue = evt.target.value;
        changeValue[fieldId] = fieldValue;
        if (fieldId === "username") {
            if (fieldValue.length >= 1) {
                setUsernameError(false);
            }
            setValues(changeValue);
        }
    }

    const cancelSettingsUsername = () => {
        setValues({
            "id": activeUserId,
            "username": values.username,
            "email": values.email,
            "password": values.password,
            "isActive": true,
            "first_name": values.first_name,
            "last_name": values.last_name
        });
        setUsernameError(false);
        toggleUsernameModal();
    }


    return (
        <>
        <div className="settings">
            <Card
                key={values.id}
                user={props.user} 
                className="settings-container">
                <Card.Content className="settings-content">
                    <Image src={require("./profile-icon.png")} />
                    <Card.Header className="settings-username">Username: {values.username}</Card.Header>
                    <Button size="tiny"
                        onClick={toggleUsernameModal}
                    >Change Username</Button>
                    <Card.Header className="settings-email">Email: {values.email}</Card.Header>
                    <Button size="tiny">Change Email</Button>
                    <Card.Header className="settings-password">Password:</Card.Header>
                    <Button size="tiny">Change Password</Button>
                </Card.Content>
            </Card>
            </div>
            <div className="settings-modal-container">
                <SettingsUsernameModal
                    usernameModalIsOpen={usernameModalIsOpen}
                    updateSettingsUsername={handleFormSubmit}
                    usernameError={usernameError}
                    handleFieldChange={handleFieldChange}
                    values={values}
                    cancelSettingsUsername={cancelSettingsUsername}
                />
            </div>
        </>
    )
}

export default SettingsCard;

