import React, { useState } from "react"
import { Sidebar, Button, Form, Header, Input } from "semantic-ui-react"
import dbAPI from "../../modules/dbAPI"

const TaskFormTransition = ({ visible, toggleFormVisibility, toggleSubmitted }) => {
    const activeUserId = parseInt(sessionStorage.getItem('userId'))
    const [taskObject, setTaskObject] = useState({ title: '', completion_date: '', is_complete: false, userId: activeUserId })


    const handleFieldChange = (evt) => {
        const stateToChange = { ...taskObject };
        stateToChange[evt.target.id] = evt.target.value;
        setTaskObject(stateToChange);
    };

    async function putNewTask() {
        if (taskObject.completion_date.length !== 16) {
            window.alert('Please select date and time.');
        } else if ((taskObject.title.length < 3)) {
            window.alert('Please enter valid task name');
        } else {
            await dbAPI.postObjectByResource('tasks', taskObject)
                    .then(toggleSubmitted(true))
                    .then(()=>{
                        document.getElementById('title').value = ""
                        document.getElementById('completion_date').value = ""
                    })
        };
    };

    return (
        <Sidebar
            animation='scale down'
            direction='bottom'
            icon='labeled'
            visible={visible}
            width='thin'
        >
            <article id="taskFormContainer">
                <div id="formInputs">
                    <Form >
                        <Header as='h3' style={{ textAlign: 'right' }} color="yellow" dividing>Task</Header>
                        <Input onChange={handleFieldChange} type='input' id="title" style={{ width: '100%' }} placeholder="Title" />
                        <br />
                        <Header as='h3' style={{ textAlign: 'right' }} color="yellow" dividing>Due Date</Header>
                        <input onChange={handleFieldChange} label='Due Date' type="datetime-local" id="completion_date" />

                    </Form>

                </div>
                <br />
                <Button onClick={putNewTask} className="formButton" style={{ marginLeft: '10px' }}>Save Task</Button>
                <Button onClick={toggleFormVisibility} className="formButton" id='nevermind' style={{ marginLeft: '4px', width: '107px' }}>Nevermind</Button>
            </article>
        </Sidebar>
    )
}
export default TaskFormTransition;