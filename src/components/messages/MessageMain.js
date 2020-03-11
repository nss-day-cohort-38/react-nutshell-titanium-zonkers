import React, {useState} from "react"
import { Grid, Image, Button } from "semantic-ui-react"
import MessageList from "./MessageList"
import FriendsList from "../friends/FriendsList"
import "./Messages.css"
import SearchUsers from "../friends/SearchUsers"



const MessagesMain = ({history}) => {
 const [searchQuery, setSearchQuery] = useState("");
 const [showAll, setShowAll] = useState(false);


    return (
        <Grid celled className="messagesContainer">
        <Grid.Row id='messagesTopRow'>
                <Grid.Column className='topRow' width={11}>
                    <Button>Send Message</Button>
                </Grid.Column>
                <Grid.Column className='topRow' width={5}>
    <Button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Friends" : "Show All Users"}</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row id="messagesMiddleRow">
                <Grid.Column className="middleRow" id="mainMessageContainer" width={11}>
                    <MessageList />
                </Grid.Column>
                <Grid.Column id="friends-list-column" className="middleRow" width={5}>
                    <FriendsList history={history} showAll={showAll} searchQuery={searchQuery}/>
                </Grid.Column>
            </Grid.Row> 
            
            <Grid.Row id='messagesBottomRow'>
                <Grid.Column className='bottomRow' width={11}>
                    <Button>Send Message</Button>
                </Grid.Column>
                <Grid.Column className='bottomRow' width={5}>
                    <SearchUsers  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    );
};
        
        
export default MessagesMain;