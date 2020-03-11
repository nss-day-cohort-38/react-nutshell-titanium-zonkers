import React, { useState, useEffect } from "react"
import { Feed, Icon, Image } from "semantic-ui-react"
import moment from "moment"
import dbAPI from "../../modules/dbAPI";
import EditAndDeletePops from "./EditAndDeletePops"
import AddOrRemoveFriend from "./AddOrRemoveFriend"

const MessageCard = ({ message, messageChange, setMessageChange }) => {

    const activeUserId = parseInt(sessionStorage.getItem('userId'));
    const [ isFriend, setIsFriend ] = useState(false)
    const [ friendObject, setFriendObject] = useState()

    async function checkToSeeIfFriends(){
        await dbAPI.getFriends('friends')
            .then(friends=>{
                const friendObj = friends.filter(dbFriendObj=>(dbFriendObj.userId === message.user.id && activeUserId === dbFriendObj.activeUserId))
                if(friendObj.length !== 0){
                    setFriendObject(friendObj[0])
                    setIsFriend(true)
                } else {
                    setIsFriend(false)
                    setFriendObject()
                }
            })
    };


    const messageOwnerClass = () => {
        if (activeUserId === message.user.id) {
            return 'activeUserMessage';
        } else {
            return 'otherUserMessage';
        };
    };

    const timeConvert = () => {
        const messageTimestamp = message.timestamp

        return moment(messageTimestamp).fromNow()
    };

    const messageOwnerButtons = () => {
        if (activeUserId === message.user.id) {
            return (
                <EditAndDeletePops message={message} setMessageChange={setMessageChange} messageChange={messageChange}/>
            );
        } else {
            return (
                <Feed.Like>
                    <Icon name='like' />4 Likes
                </Feed.Like>
            );
        };
    }
    
    const nameColor = () => {
        if(activeUserId === message.user.id) {
            return 'userMessage'
        } else if (isFriend === true) {
            return 'friendMessage'
        } else if (isFriend === false) {
            return 'nonFriendMessage'
        };
    };

    const convertImageUrl = () => {
        if (message.image !== undefined && message.image !== "") {
            console.log(message.image)
            return (
                <Feed.Meta>
                    <Image src={message.image} alt='image not showing' />
                </Feed.Meta>
            )
        } else {
            return null
        }
    }

    useEffect(()=>{
        checkToSeeIfFriends()
    }, [messageChange])

    return (
        <Feed.Event className={`fullMessage ${messageOwnerClass()}`}>
            <Feed.Label>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F1975nj.jpg&f=1&nofb=1' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User className={nameColor()} >{message.user.username}</Feed.User>
                        {message.message}
                    <Feed.Date>{timeConvert()}</Feed.Date>
                </Feed.Summary>
                <Feed.Meta className={messageOwnerClass()}>
                {activeUserId!==message.user.id ? <AddOrRemoveFriend message={message} setMessageChange={setMessageChange} isFriend={isFriend} setIsFriend={setIsFriend} friendObject={friendObject}/> : null }
                {messageOwnerButtons()}
                </Feed.Meta>
                {convertImageUrl()}
            </Feed.Content>
        </Feed.Event>
    );

};

export default MessageCard