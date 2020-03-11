import React, { useState, useEffect } from "react"
import { Feed } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"
import MessageCard from "./MessageCard"

const MessageList = ({messageChange, setMessageChange, forum}) => {

    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        dbAPI.getMessagesExpanded()
            .then(messages => {
                const forumMessages = messages.filter(message => forum === message.forum)
                const messagesSorted = forumMessages.sort((a, b) => { return new Date(a.timestamp) - new Date(b.timestamp) });
                setMessages(messagesSorted)
            })
    };

    useEffect(()=>{
        getMessages()
        setMessageChange(false)
    },[messageChange, forum])

    return (
        <Feed>
           { messages.length !== 0 ? messages.map(message => <MessageCard key={message.id} message={message} messageChange={messageChange} setMessageChange={setMessageChange} getMessages={getMessages}/>) : <h3>There are no messages here . . . be the first to create one!</h3>}
        </Feed>
    );

};

export default MessageList;