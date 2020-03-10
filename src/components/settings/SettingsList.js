import React, { useEffect, useState } from 'react';
import SettingsCard from './SettingsCard';
import dbAPI from '../../modules/dbAPI';
import './Settings.css';

const SettingsList = (props) => {

    const activeUserId = parseInt(sessionStorage.getItem("userId"));

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
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

    const getUsers = () => {
        return dbAPI.getUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        });
    };

    const toggleUsernameModal = () => {
        setUsernameModalIsOpen(!usernameModalIsOpen);
    };

    const handleFormSubmit = () => {
        if (event.target.id === "username") {
            const usernames = users.filter(user => {
                if (newUsername === user.username) {
                    if (usernames.length !== 0) {
                        window.alert("Username already taken!")
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
                        getUsers();
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

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="settings">
                {users.map(user => {
                    if (parseInt(user.id) === parseInt(activeUserId)) {
                        return <SettingsCard
                            key={user.id}
                            user={user}
                            {...props}
                        />
                    }
                }
                )}
            </div>
        </>
    )
}

export default SettingsList;