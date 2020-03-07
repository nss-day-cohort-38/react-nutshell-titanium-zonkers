import React, { useState, useEffect } from "react"
import { List } from "semantic-ui-react"
import moment from 'moment'
import dbAPI from "../../modules/dbAPI";




export default ({ taskObj, changeComplete }) => {

    async function toggleComplete () {
        const toggledCompletion = { "is_complete": !taskObj.is_complete }
        return await dbAPI.patchObjectByResource('tasks', taskObj.id, toggledCompletion)
                .then(changeComplete(!taskObj.is_complete))
    }

    const deleteTask = () => {
        if(window.confirm('Are you sure you want to delete this task?')){
            if(window.confirm('Really, really? Last Chance . . .')){
                dbAPI.deleteObjectByResource('tasks', taskObj.id)
            }
        }
    }

    const convertedTaskDate = moment(taskObj.completion_date).format('LLL')
    
    const iconBoolean = () => {
        if(taskObj.is_complete === true) {
            return(<List.Icon className='checkMark' name='check' onClick={toggleComplete}/>)
        } else if (taskObj.is_complete === false) {
            return(<List.Icon className='xMark' name='x' onClick={toggleComplete}/>)
        };
    };
    
    const strikeThroughBoolean = () => {
        if(taskObj.is_complete === true) {
            return(
            <List.Content className='completed'>
                <List.Header as='a'>{taskObj.title}</List.Header>
                <List.Description>
                {convertedTaskDate}
                </List.Description>
            </List.Content>
                );
        } else if (taskObj.is_complete === false) {
            return(
            <List.Content className='incomplete'>
                <List.Header as='a'>{taskObj.title}</List.Header>
                <List.Description>
                {convertedTaskDate}
                </List.Description>
            </List.Content>
            );
        };
    };
    
    return (
        <List.Item className="taskDiv" >
            <List.Icon className='deleteTask' name='trash alternate' onClick={deleteTask}/>
            {iconBoolean()}
            {strikeThroughBoolean()}
        </List.Item>
        
    );
};
