import React, { useState } from 'react'
import { Transition, Button, Icon, Sidebar, Header } from 'semantic-ui-react'
import "./Tasks.css"
import TasksList from "./TasksList"
import TaskFormTransition from "./TaskForm"


const TasksMain2 = () => {
    const [isVisible, changeVisible] = useState(false)
    const [isFormVisible, changeIsFormVisible] = useState(false)

    const toggleVisibility = () => {
        changeVisible(!isVisible)
    }
    const toggleFormVisibility = () => {
        changeIsFormVisible(!isFormVisible)
    }
    return (

        <div className="tasksContainer">
            <>
                <Transition visible={!isVisible}>
                    <Button id="openTasksButton" icon onClick={toggleVisibility}><Icon name="angle double up" />Tasks</Button>
                </Transition>
                <Transition visible={isVisible} animation='slide left' duration={400}>
                    <section className="tasksSidebar">
                        <Button id="closeTasksButton" icon onClick={toggleVisibility}><Icon name="angle double right" /></Button>
                        <div id="tasksSidebarContentContainer">
                            <Sidebar.Pushable>
                                <TaskFormTransition visible={isFormVisible} toggleFormVisibility={toggleFormVisibility}/>
                                <Sidebar.Pusher style={{height: '80% !important'}}>
                                <Header as='h3' style={{color: 'white', textAlign: 'right'}} color="yellow" dividing>Tasks</Header>
                                <TasksList />
                                </Sidebar.Pusher>
                            </Sidebar.Pushable>
                            <Transition visible={!isFormVisible}>
                            <Button icon onClick={toggleFormVisibility} className="createFormButton"><Icon name='write'/>Create Task</Button>
                            </Transition>
                        </div>

                    </section>
                </Transition>
            </>

        </div>

    )
}

export default TasksMain2;