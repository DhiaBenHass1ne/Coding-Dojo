import React from 'react'
import { useParams } from "react-router-dom";
const Message = () => {
    const {msg}=useParams();
    return (
        <div>
            {isNaN(msg)?<h1>The word is: {msg}</h1>:<h1>The number is is: {msg}</h1>}
        </div>
    )
}

export default Message
