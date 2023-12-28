import React, { useState } from 'react'

const List = ({tasks,deleteHandler,checkHandler}) => {
console.log("===>",tasks)
const [listTask,setListTask]=useState(tasks);
    return (
        <div>
            {tasks.map((one_task, idx)=>{return (
                <div key={idx}>
                    {/* {console.log(one_task.done)} */}
                    {/* {one_task.done? <s><span id={idx}>{one_task.name}</span></s>:<span id={idx}>{one_task.name}</span>} */}
                    <span id={idx}>{one_task.name}</span>
                    <span><input type="checkbox" id='done' onChange={(e)=>{checkHandler(e,idx)}}/></span>
                    <button onClick={()=>{deleteHandler(idx)}}>Delete</button>       
                </div>
                // <Task key={idx} taskId={idx} task={one_task} deleteHandler={targetD} checkHandler={targetC}/>
            )})}
        </div>
    )
}

export default List



// text-decoration: line-through