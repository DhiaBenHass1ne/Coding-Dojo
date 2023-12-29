import React from 'react'
import { useParams } from "react-router-dom";
const Color = () => {
    const {txt,bg,fc}=useParams();
return (
        <div>
            <div>
                {isNaN(txt)?<h1 style={{backgroundColor: `${bg}`, color:`${fc}`}}>The word is: {txt}</h1>:<h1 style={{backgroundColor: `${bg}`, color:`${fc}`}}>The number is is: {txt}</h1>}
            </div>
        </div>
        )
}

export default Color
