import React, { useState } from 'react'

const Form = ({formHandler}) => {
    const [task,setTask]=useState("")
    return (
    <div>
        <form onSubmit={(e)=>{formHandler(e,task);setTask("")}}>
            <input value={task} id='my-form' type="text" onChange={(e)=>{setTask(e.target.value)}}/>
            <button>Add</button>
        </form>
    </div>
    )
}

export default Form
