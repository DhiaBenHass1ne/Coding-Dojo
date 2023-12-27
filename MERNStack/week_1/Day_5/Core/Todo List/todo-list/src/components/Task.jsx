import React from 'react'

const Task = ({task, taskId, deleteHandler,checkHandler}) => {
    return (<div>
        {task.done? <s><span id={taskId}>{task.name}</span></s>:<span id={taskId}>{task.name}</span>}
        <span><input type="checkbox" id='done' checked={task.done} onChange={(e)=>{checkHandler(e,taskId)}}/></span>
        <button onClick={()=>{deleteHandler(taskId)}}>Delete</button>       
        </div>)
}

export default Task
