import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const SettingsCard = (props) => {

    return (
        <>
        <Card className="settings-container">
            <Card.Content className="settings-content">
                <Image src={require("./profile-icon.png")}/>
                <Card.Header className="settings-username">Username: {props.user.username}</Card.Header>
                <Button size="tiny">Change Username</Button>
                <Card.Header className="settings-email">Email: {props.user.email}</Card.Header>
                <Button size="tiny">Change Password</Button>
                <Card.Header className="settings-password">Password:</Card.Header>
                <Button size="tiny">Change Password</Button>
            </Card.Content>
        </Card>
        </>
    )
}

export default SettingsCard;