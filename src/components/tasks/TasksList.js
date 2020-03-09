import React, {useState, useEffect} from "react";
import { List } from 'semantic-ui-react'
import dbAPI from "../../modules/dbAPI"
import TaskCard from "./TaskCard"

const TasksList = () => {

    const [ tasks, setTasks ] = useState([])

    const activeUserId = parseInt(sessionStorage.getItem('userId'))

    const getTasksArray = () => {
        return dbAPI.getObjectByResource('tasks', activeUserId)
                    .then(tasksArray => setTasks(tasksArray))
    }
   const placeholder = 'Hello'
    useEffect (()=>{
        getTasksArray()
    }, [])

    return (
        <List id="taskListContainer">
            {tasks.map(taskObj => <TaskCard key={taskObj.id} taskObj={taskObj} />)}
        </List>
    );


};

export default TasksList;