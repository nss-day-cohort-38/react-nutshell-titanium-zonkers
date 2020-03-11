import React, {useState} from "react"
import { Grid, Image, Button, Input } from "semantic-ui-react"
import MessageHeader from "./MessagesHeader"
import MessageList from "./MessageList"
import FriendsList from "../friends/FriendsList"
import MessageEntry from "./MessageEntry"
import "./Messages.css"
import SearchUsers from "../friends/SearchUsers"



const MessagesMain = ({history}) => {
 const [searchQuery, setSearchQuery] = useState("");
 const [showAll, setShowAll] = useState(false);


    const [ messageChange, setMessageChange ] = useState(false)
    const [ forum, setForum ] = useState("general")

    return (
        <Grid className="messagesContainer">
        <Grid.Row id='messagesTopRow'>
                <Grid.Column className='topRow' width={11}>
                    <MessageHeader forum={forum} setForum={setForum} />
                </Grid.Column>
                <Grid.Column className='topRow' width={5}>
    <Button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Friends" : "Show All Users"}</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row id="messagesMiddleRow">
                <Grid.Column className="middleRow" id="mainMessageContainer" width={11}>
                    {/* Where the messages live! */}
                    <MessageList messageChange={messageChange}  setMessageChange={setMessageChange} forum={forum} />
                </Grid.Column>
                <Grid.Column id="friends-list-column" className="middleRow" width={5}>
                    <FriendsList history={history} showAll={showAll} searchQuery={searchQuery}/>
                </Grid.Column>
            </Grid.Row> 
            
            <Grid.Row id='messagesBottomRow'>
                <Grid.Column className='sendMessage bottomRow' width={11}>
                    <MessageEntry setMessageChange={setMessageChange} forum={forum}/>
                </Grid.Column>
                <Grid.Column className='bottomRow' width={5}>
                    <SearchUsers  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    );
};
        
        
export default MessagesMain;