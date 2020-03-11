import React, { useState, useEffect } from "react"
import { Button, Popup, Feed, Icon } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"

const AddOrRemoveFriend = ({message, messageChange, setMessageChange, isFriend, setIsFriend, friendObject}) => {

    const activeUserId = parseInt(sessionStorage.getItem('userId'));
    const [ addFriendPop, setAddFriendPop ] = useState(false)

    async function addFriendObject() {
        const friendObject = {
            "userId": message.user.id,
            "activeUserId": activeUserId
        }

        await dbAPI.postObjectByResource("friends", friendObject)
    };

    async function deleteFriendObj () {
        await dbAPI.deleteObjectByResource('friends', friendObject.id)
    };

    const friendOrNotMessage = () => {
        if (isFriend === false) {
            return(
                <>
                <Feed.Summary >Add {message.user.username} as a friend?</Feed.Summary>
                    <Button color='linkedin' content="Add Friend"
                        onClick={() => {
                            addFriendObject();
                            setMessageChange(false)
                            setMessageChange(true)
                            setAddFriendPop(false);
                        }}/>
                </>
            ); 
        } else if (isFriend === true) {
            return (
            <>
                <Feed.Summary >Remove {message.user.username} as a friend?</Feed.Summary>
                    <Button color='red' content="Remove Friend"
                        onClick={() => {
                            deleteFriendObj();
                            setMessageChange(true)
                            setAddFriendPop(false);
                        }}/>
                </>
            );
        }
    }

        return (
            <Popup wide 
            trigger={<button className='friendButton' onClick={()=>{
                setAddFriendPop(true)
            }} style={{color: `${isFriend ? "red" : "green"}`}} ><Icon name={isFriend ? "user delete" : "add user"}/></button>}
            on="click"
            position='bottom right'
            open={addFriendPop}>
                <Feed.Label>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F1975nj.jpg&f=1&nofb=1' />
                </Feed.Label> 
                {friendOrNotMessage()}
                <Button color="grey" content="Cancel"
                        onClick={() => {
                            setAddFriendPop(false);
                }}/>
        </Popup>
    
        );
};



export default AddOrRemoveFriend;