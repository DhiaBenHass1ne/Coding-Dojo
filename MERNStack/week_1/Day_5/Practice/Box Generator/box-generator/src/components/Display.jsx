import Box from './Box';

const Display = ({allboxes}) => {
    


    return (
        
        <div className='list'>
            { 
            allboxes.map ((one_box)=><Box color={one_box}/>)
            }
        </div>
    )
}

export default Display
