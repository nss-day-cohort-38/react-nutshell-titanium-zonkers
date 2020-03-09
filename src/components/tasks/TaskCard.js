import React from "react"
import { List } from "semantic-ui-react"




export default ({ taskObj }) => {
    return (

        <List.Item className="taskDiv" >
            <List.Icon name='marker' />
            <List.Content>
                <List.Header as='a'>{taskObj.title}</List.Header>
                <List.Description>
                {taskObj.completion_date}
                </List.Description>
            </List.Content>
        </List.Item>
        
    );
};
