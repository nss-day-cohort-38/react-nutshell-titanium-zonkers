import React, { useState, useEffect } from "react"
import { List } from "semantic-ui-react"
import moment from 'moment'
import dbAPI from "../../modules/dbAPI";




export default ({ taskObj, changeComplete }) => {
    
    const [ editTitle, setEditTitle ] = useState(false)

    async function toggleComplete () {
        const toggledCompletion = { "is_complete": !taskObj.is_complete }
        return await dbAPI.patchObjectByResource('tasks', taskObj.id, toggledCompletion)
                .then(changeComplete(!taskObj.is_complete))
    }

    const deleteTask = () => {
        if(window.confirm('Are you sure you want to delete this task?')){
            if(window.confirm('Really, really? Last Chance . . .')){
                dbAPI.deleteObjectByResource('tasks', taskObj.id)
                .then(changeComplete(!taskObj.is_complete))
            }
        }
    }

    async function saveEditedTask(event) {
        if (event.key === 'Enter') {
           await dbAPI.patchObjectByResource('tasks', taskObj.id, {"title": event.target.value })
                .then(setEditTitle(false))
                .then(changeComplete(true))

        }
    }

    const convertedTaskDate = moment(taskObj.completion_date).format('LLL')

    useEffect(()=>{
        displayTaskBooleans()
    }, [editTitle])
    
    const iconBoolean = () => {
        if(taskObj.is_complete === true) {
            return(<List.Icon className='checkMark' name='check' onClick={toggleComplete}/>)
        } else if (taskObj.is_complete === false) {
            return(<List.Icon className='xMark' name='x' onClick={toggleComplete}/>)
        };
    };

    const toggleEdit = (event) => {
        setEditTitle(!editTitle)
    }
    
    const displayTaskBooleans = () => {
        if(taskObj.is_complete === true) {
            return(
            <List.Content className='completed'>
                <List.Header id={`$task-${taskObj.id}`} as='a'>{taskObj.title}</List.Header>
                <List.Description>
                {convertedTaskDate}
                </List.Description>
            </List.Content>
                );
        } else if (taskObj.is_complete === false && editTitle === true) {
            return(
                <List.Content className='incomplete'>
                    <input id={`input-${taskObj.id}`} placeholder={`${taskObj.title}`} onKeyUp={saveEditedTask} />
                    <List.Description>
                    {convertedTaskDate}
                    </List.Description>
                </List.Content>
            );
        }
        
        else if (taskObj.is_complete === false) {
            return(
            <List.Content className='incomplete'>
                <List.Header id={`task-${taskObj.id}`} as='a' onDoubleClick={toggleEdit}>{taskObj.title}</List.Header>
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
            {displayTaskBooleans()}
        </List.Item>
        
    );
};
