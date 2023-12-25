import React, { useState } from 'react'
import Display from './Display';
const FormColor = () => {
    const boxes = ["red","blue","purple"];
    const [color,setColor]=useState("");
    
    const [allboxes,setAllboxes]=useState(boxes);

    const addColor = (e) => {
      e.preventDefault()
      setAllboxes([...allboxes,color])
      setColor("")
      
    }
  return (
    <div>
      <form onSubmit={addColor}>
        Color:
        <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
        <button>Add</button>
        <Display allboxes={allboxes}/>
        </form>
    </div>
  )
}

export default FormColor

