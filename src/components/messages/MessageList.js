import React, { useState, useEffect } from "react"
import { Feed } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"
import MessageCard from "./MessageCard"

const MessageList = ({messageChange, setMessageChange}) => {

    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        dbAPI.getMessagesExpanded()
            .then(messages => {
                const messagesSorted = messages.sort((a, b) => { return new Date(a.timestamp) - new Date(b.timestamp) });
                setMessages(messagesSorted)
            })
    };

    useEffect(()=>{
        getMessages()
        setMessageChange(false)
    },[messageChange])

    return (
        <Feed>
           { messages.map(message => <MessageCard key={message.id} message={message} messageChange={messageChange} setMessageChange={setMessageChange} getMessages={getMessages}/>)}
        </Feed>
    );

};

export default MessageList;