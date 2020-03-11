import React, { useState } from "react"
import { Button, Popup, Grid, Form, TextArea } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"

const EditAndDeletePops = ({message, setMessageChange}) => {

    const activeUserId = parseInt(sessionStorage.getItem('userId'));
    const [deletePopIsOpen, setDeletePopIsOpen] = useState(false);
    const [editPopIsOpen, setEditPopIsOpen] = useState(false)
    const [ editedMessage, setEditedMessage ] = useState(message.message)

    const handleFieldChange = (event) => {
        setEditedMessage(event.target.value);
    };

    const deleteMessage = () => {
        dbAPI.deleteObjectByResource('messages', message.id)
            .then(setMessageChange(true))
    };

    const patchEditedMessage = () => {
        dbAPI.patchObjectByResource('messages', message.id, { "message": editedMessage})
        .then(setMessageChange(true))
        .then(setEditPopIsOpen(false))
    }

    return (
        <>
            <Popup wide 
                trigger={<Button
                    className="messageButton deleteButton"
                    content="delete"
                    onClick={() => {
                        setDeletePopIsOpen(true);
                        }}
                    />}
                on="click"
                position='bottom right'
                open={deletePopIsOpen}
            >
                <Grid divided columns="equal">
                    <Grid.Column>
                        <Button
                            color="red"
                            content="Delete"
                            onClick={() => {
                                deleteMessage();
                                setDeletePopIsOpen(false);
                            }}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                            color="grey"
                            content="Cancel"
                            onClick={() => {
                                setDeletePopIsOpen(false);
                            }}
                        />
                    </Grid.Column>
                </Grid>
            </Popup>
            <Popup wide 
                trigger={<Button
                    className="messageButton"
                    content="edit"
                    onClick={() => {
                        setEditPopIsOpen(true);
                        }}
                    />}
                on="click"
                position='bottom right'
                open={editPopIsOpen}
            >
                <Form>
                <TextArea onChange={handleFieldChange} value={editedMessage} onKeyUp={(e)=> e.key==='Enter' ? patchEditedMessage() : null}/>
                </Form>
                <Button color='olive' content="Save" onClick={() => {
                                            patchEditedMessage();
                                            setEditPopIsOpen(false);

                                            }}/>
                <Button color="grey" content="Cancel" onClick={() => {setEditPopIsOpen(false)}}/>
            </Popup>
        </>
    )
};

export default EditAndDeletePops;