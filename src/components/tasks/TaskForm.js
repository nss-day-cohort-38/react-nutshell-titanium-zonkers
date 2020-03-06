import React from "react"
 
const TaskForm = () => {
   return (<article id="taskFormContainer">
    <form name="taskForm" id="taskForm" action="">
        <fieldset form="taskForm" id="taskNameField">
            <input type="text" name="taskName" id="taskName" placeholder='Enter Task Here' />
        </fieldset>
        <fieldset form="taskForm" id="completionDateField">
            <label for="completionDate">Deadline:</label>
            <input type="datetime-local" name="completionDate" id="completionDate" />
        </fieldset>
    </form>
    <button id='saveBtn' class='button'>Save Task</button>
    <button class='createFormButton' id='nevermind'>Nevermind</button>
    </article>
    )
}