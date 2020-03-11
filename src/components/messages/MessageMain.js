import React, { useState } from "react"
import { Grid, Image, Button, Input } from "semantic-ui-react"
import MessageHeader from "./MessagesHeader"
import MessageList from "./MessageList"
import FriendsList from "../friends/FriendsList"
import MessageEntry from "./MessageEntry"
import "./Messages.css"



const MessagesMain = () => {

    const [ messageChange, setMessageChange ] = useState(false)
    const [ forum, setForum ] = useState("general")

    return (
        <Grid className="messagesContainer">
        <Grid.Row id='messagesTopRow'>
                <Grid.Column className='topRow' width={11}>
                    <MessageHeader forum={forum} setForum={setForum} />
                </Grid.Column>
                <Grid.Column className='topRow' width={5}>
                    <Button>Toggle Friends</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row id="messagesMiddleRow">
                <Grid.Column className="middleRow" id="mainMessageContainer" width={11}>
                    {/* Where the messages live! */}
                    <MessageList messageChange={messageChange}  setMessageChange={setMessageChange} forum={forum} />
                </Grid.Column>
                <Grid.Column className="middleRow" width={5}>
                    <FriendsList />
                </Grid.Column>
            </Grid.Row> 
            
            <Grid.Row id='messagesBottomRow'>
                <Grid.Column className='sendMessage bottomRow' width={11}>
                    <MessageEntry setMessageChange={setMessageChange} forum={forum}/>
                </Grid.Column>
                <Grid.Column className='bottomRow' width={5}>
                    <Button>Toggle Friends</Button>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    );
};
        
        
export default MessagesMain;