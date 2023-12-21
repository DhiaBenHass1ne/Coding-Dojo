import { useState } from "react"

const PersonCard = ({person}) => {
    const [somePerson, setSomePerson]= useState(person)
    const HandleBirthday = () => {
        console.log("its working")
        setSomePerson({...somePerson, age:somePerson.age+1})
    }
    return (
        <div>
            <h1>{person.lastName}, {person.firstName}</h1>
            <p>Age: {somePerson.age}</p>
            <p>Hair Color: {person.hairColor}</p>
            <button onClick={HandleBirthday}>Birthday Button For : {person.firstName} {person.lastName}</button>
        </div>
    )
}

export default PersonCard
