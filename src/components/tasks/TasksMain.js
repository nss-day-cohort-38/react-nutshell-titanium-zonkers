import React, { useState, useEffect } from 'react'
import { Transition, Button, Icon, Sidebar, Header } from 'semantic-ui-react'
import "./Tasks.css"
import TasksList from "./TasksList"
import TaskFormTransition from "./TaskForm"


const TasksMain = ({isActiveUser, setIsActiveUser}) => {
    const [isVisible, changeVisible] = useState(false)
    const [isFormVisible, changeIsFormVisible] = useState(false)
    const [isSubmitted, toggleSubmitted] = useState(false)

    const toggleVisibility = () => {
        changeVisible(!isVisible)
    }
    const toggleFormVisibility = () => {
        document.getElementById('title').value = ""
        document.getElementById('completion_date').value = ""
        changeIsFormVisible(!isFormVisible)
    }

    const checkActiveUser = () => {
        if (sessionStorage.getItem('userId') !== null){
            setIsActiveUser(true)
        } else {
            setIsActiveUser(false)
        }
    }

    useEffect(() => {
        changeIsFormVisible(false)
        checkActiveUser()
    }, [isSubmitted, isActiveUser])

    if (isActiveUser === true){
        return (

            <div className="tasksContainer">
                <>
                    <Transition visible={!isVisible}>
                        <Button id="openTasksButton" icon onClick={toggleVisibility}><Icon name="angle double up" />Tasks</Button>
                    </Transition>
                    <Transition visible={isVisible} animation='slide left' duration={350}>
                        <section className="tasksSidebar">
                            <Button id="closeTasksButton" icon onClick={toggleVisibility}><Icon name="angle double right" /></Button>
                            <div id="tasksSidebarContentContainer">
                                <Sidebar.Pushable>
                                    <TaskFormTransition visible={isFormVisible} toggleSubmitted={toggleSubmitted} toggleFormVisibility={toggleFormVisibility} />
                                    <Sidebar.Pusher >
                                        <Header as='h3' style={{ color: 'white', textAlign: 'right' }} color="yellow" dividing>Tasks</Header>
                                        <TasksList isSubmitted={isSubmitted} toggleSubmitted={toggleSubmitted} />
                                    </Sidebar.Pusher>
                                </Sidebar.Pushable>
                                <Transition visible={!isFormVisible}>
                                    <Button icon onClick={toggleFormVisibility} className="createFormButton"><Icon name='write' />Create Task</Button>
                                </Transition>
                            </div>
    
                        </section>
                    </Transition>
                </>
    
            </div>
    
        )
    } else {
        return null
    }
    
    
}

export default TasksMain;