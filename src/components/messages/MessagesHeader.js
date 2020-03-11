import React from "react"
import { Header, Dropdown } from "semantic-ui-react"

const MessagesHeader = ({forum, setForum}) => {

    return (
        <div id="messagesHeaderContainer">
            <Header as='h1'>Messages</Header>
            <Dropdown text={`Forum:  ${forum.charAt(0).toUpperCase() + forum.slice(1)}`} className="messagesDropDown">
                <Dropdown.Menu>

                    <Dropdown.Item text='General' onClick={()=>setForum('general')}/>
                    <Dropdown.Item text='Programming' onClick={()=>setForum('programming')} />
                    <Dropdown.Item text='Memes' onClick={()=>setForum('memes')} />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MessagesHeader;