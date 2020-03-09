import React, {useState, useEffect} from "react";
import { List } from 'semantic-ui-react'
import dbAPI from "../../modules/dbAPI"
import TaskCard from "./TaskCard"

const TasksList = ({isSubmitted, toggleSubmitted}) => {

    const [ tasks, setTasks ] = useState([])
    const [ isComplete, changeComplete ] = useState([])

    const activeUserId = parseInt(sessionStorage.getItem('userId'))

    const getTasksArray = () => {
        return dbAPI.getObjectByResource('tasks', activeUserId)
                    .then(tasksArray => {
                        const tasksSorted = tasksArray.sort((a, b) => { return new Date(a.completion_date) - new Date(b.completion_date) });
                            setTasks(tasksSorted)
                    });

    };

    const checkForTasks = () => {

        if(tasks.length === 0) {
            return (
                <List.Content>
                    <List.Icon name='x' className='xMarker'/>
                    <List.Description>
                        You don't have any tasks yet. Click the button down bellow to create one!
                    </List.Description>
                </List.Content>
            )
        } else {
            return (tasks.map(taskObj => <TaskCard key={taskObj.id} taskObj={taskObj} isComplete={isComplete} changeComplete={changeComplete}/>))
        };
    };

    useEffect (()=>{
        getTasksArray()
        changeComplete()
        toggleSubmitted(false)
    }, [isComplete, isSubmitted])

    return (
        <List id="taskListContainer">
            {checkForTasks()}
        </List>
    );


};

export default TasksList;