import React from "react"
import { Sidebar, Button } from "semantic-ui-react"

const TaskFormTransition = ({visible, toggleFormVisibility}) => {
    return (
    <Sidebar
      animation='scale down'
      direction='bottom'
      icon='labeled'
    //   inverted
    //   vertical
      visible={visible}
      width='thin'
    >
     <article id="taskFormContainer">
    <form name="taskForm" id="taskForm" action="">
        <fieldset form="taskForm" id="taskNameField">
            <input type="text" name="taskName" id="taskName" placeholder='Enter Task Here' />
        </fieldset>
        <fieldset form="taskForm" id="completionDateField">
            <label >Deadline:</label>
            <input type="datetime-local" name="completionDate" id="completionDate" />
        </fieldset>
    </form>
    <Button onClick={toggleFormVisibility} className="formButton" className='button'>Save Task</Button>
    <Button onClick={toggleFormVisibility} className="formButton" id='nevermind'>Nevermind</Button>
    </article>
    </Sidebar>
  )
}
export default TaskFormTransition;