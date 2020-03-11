import React, { useState } from "react"
import { Input, Button } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"
import moment from "moment"

const MessageEntry = ({setMessageChange, forum}) => {
    
    const activeUserId = parseInt(sessionStorage.getItem('userId'));


    const [ newMessage, setNewMessage ] = useState("")

    const handleFieldChange = (event) => {
        setNewMessage(event.target.value);
    };

    const postMessage = () => {
        const messageObj = {
            "userId": activeUserId,
          "message": newMessage,
          "timestamp": (moment().format()),
          "forum": forum,
        }
        
        if (newMessage.trim !== "") {
            dbAPI.postObjectByResource('messages', messageObj)
                .then(setMessageChange(true))
                .then(document.getElementById('message').value = "")
        }
    };

    return (
    <>
        <Input onKeyUp={(e)=> e.key==='Enter' ? postMessage() : null} id="message" onChange={handleFieldChange} placeholder="enter message" />
        <Button onClick={postMessage}>Send</Button>
    </>
    );

};

export default MessageEntry;