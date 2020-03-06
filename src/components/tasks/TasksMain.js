import React, { useState } from 'react'
import { Transition, Button, Icon } from 'semantic-ui-react'
import "./Tasks.css"
import TasksList from "./TasksList"


const TasksMain2 = () => {
    const [isVisible, changeVisible] = useState(false)

    const toggleVisibility = () => {
        changeVisible(!isVisible)
    }
    return (

        <div className="tasksContainer">
            <>
            <Transition visible={!isVisible}>
                <Button onClick={toggleVisibility} content={'Tasks'}></Button>
            </Transition>
            <Transition visible={isVisible} animation='fade left' duration={500}>
                <div className="tasksSidebar">
                    <Button icon onClick={toggleVisibility}><Icon name="angle double right"/></Button>
                    <TasksList />
                </div>
            </Transition>
            </>

        </div>

    )
}

export default TasksMain2;