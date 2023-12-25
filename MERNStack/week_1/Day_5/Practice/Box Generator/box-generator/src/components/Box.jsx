import React from 'react'

const Box = ({color}) => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++",color)
    return (
    <div className='box' style={{backgroundColor: color}}></div>
    )
}

export default Box
