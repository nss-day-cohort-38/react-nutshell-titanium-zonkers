import React from "react"
import { Header, Dropdown } from "semantic-ui-react"

const MessagesHeader = () => {

    return (
        <div id="messagesHeaderContainer">
            <Header as='h1'>Messages</Header>
            <Dropdown text='Forum' className="messagesDropDown">
                <Dropdown.Menu>
                    <Dropdown.Item text='General' />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MessagesHeader;