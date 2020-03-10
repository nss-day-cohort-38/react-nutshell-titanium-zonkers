import React from "react"
import { Grid, Image, Button } from "semantic-ui-react"
import MessageList from "./MessageList"
import FriendsList from "../friends/FriendsList"
import "./Messages.css"



const MessagesMain = () => {
 
    return (
        <Grid celled className="messagesContainer">
        <Grid.Row id='messagesTopRow'>
                <Grid.Column className='topRow' width={11}>
                    <Button>Send Message</Button>
                </Grid.Column>
                <Grid.Column className='topRow' width={5}>
                    <Button>Toggle Friends</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row id="messagesMiddleRow">
                <Grid.Column className="middleRow" id="mainMessageContainer" width={11}>
                    <MessageList />
                </Grid.Column>
                <Grid.Column className="middleRow" width={5}>
                    <FriendsList />
                </Grid.Column>
            </Grid.Row> 
            
            <Grid.Row id='messagesBottomRow'>
                <Grid.Column className='bottomRow' width={11}>
                    <Button>Send Message</Button>
                </Grid.Column>
                <Grid.Column className='bottomRow' width={5}>
                    <Button>Toggle Friends</Button>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    );
};
        
        
export default MessagesMain;