import React, { useState, useEffect } from "react"
import { Input, Button, Image, Popup } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"
import moment from "moment"

const MessageEntry = ({ setMessageChange, forum }) => {

    const activeUserId = parseInt(sessionStorage.getItem('userId'));


    const [newMessage, setNewMessage] = useState("")
    const [imagePopIsOpen, setImagePopIsOpen] = useState(false)
    const [ imageUrl, setImageUrl ] = useState("")

    const handleFieldChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const postMessage = () => {
        const messageObj = {
            "userId": activeUserId,
            "image": imageUrl,
            "message": newMessage,
            "timestamp": (moment().format()),
            "forum": forum,
        };

        if (newMessage.trim() !== "") {
            dbAPI.postObjectByResource('messages', messageObj)
                .then(()=>{
                    setMessageChange(true)
                    setImagePopIsOpen(false)
                    document.getElementById('message').value = ""
                });
        } else {
            window.alert('Please enter valid message!')
        }
    };

    const imageUrlTest = () => {
        if(imageUrl !== "" || imageUrl.includes('.com') === true){
            postMessage()
        } else {
            window.alert('Please enter valid image url')
        }
    };

    useEffect(()=>{
        console.log(imageUrl)
    }, [imageUrl])

    return (

        <>
            <Popup
                trigger={<Button
                    className="imageUpload"
                    content="Upload Image"
                    onClick={() => {
                        setImagePopIsOpen(true);
                    }}
                />}
                on="click"
                position='top left'
                open={imagePopIsOpen}
            >
                <Input id="imageUrl" onChange={handleImageUrlChange} placeholder='image url here'/>
                <Input  onKeyUp={(e) => e.key === 'Enter' ? imageUrlTest() : null} id="message" onChange={handleFieldChange} placeholder="describe image" />
                <br/>
                <Button color='olive' onClick={()=>{
                    imageUrlTest();
                    }} content='Submit'/>
                <Button color="grey" content="Cancel" onClick={() => { setImagePopIsOpen(false) }} />
            </Popup>
            <Input onKeyUp={(e) => e.key === 'Enter' ? postMessage() : null} id="message" onChange={handleFieldChange} placeholder="enter message" />
            <Button onClick={postMessage}>Send</Button>
        </>
    );

};

export default MessageEntry;