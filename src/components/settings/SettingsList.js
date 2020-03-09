import React, { useEffect, useState } from 'react';
import SettingsCard from './SettingsCard';
import dbAPI from '../../modules/dbAPI';

const SettingsList = (props) => {

    const activeUserId = parseInt(sessionStorage.getItem("userId"));

    const [users, setUsers] = useState([])

    const getUsers = () => {
        return dbAPI.getUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        })

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