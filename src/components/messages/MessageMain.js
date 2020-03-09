import React from "react"
import { Grid, Image, Button } from "semantic-ui-react"
import MessageList from "./MessageList"
import "./Messages.css"



const MessagesMain = () => {
    return (
        <Grid celled className="messagesContainer">
            <Grid.Row>
                <Grid.Column width={12}>
                    <MessageList />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='/images/wireframe/centered-paragraph.png' />
                </Grid.Column>
            </Grid.Row> 
            <Grid.Row height={1} id='messagesBottomRow'>
                <Grid.Column width={12}>
                    <Button>Send Message</Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button>Toggle Friends</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
            )
        }
        
        
        
        
export default MessagesMain;