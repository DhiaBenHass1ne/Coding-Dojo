import React from 'react'
import { useState } from 'react';

const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [cpassword, setCpassword] = useState("");
    const [error,setError] = useState("");
    
    return (
        <div>
        <form>
            <div>
                <label>First Name: </label> 
                <input onChange={ (e) => { setFirstname(e.target.value);
                if (firstname.length < 2){
                    setError("First name must be atleast 2 characters")
                } else{
                    setError("")
                }
                } } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input onChange={ (e) => { setLastname(e.target.value);
                if (lastname.length < 2){
                    setError("last name must be atleast 2 characters")
                } else{
                    setError("")
                }
                } } />            </div>
            <div>
                <label>Email Address: </label> 
                <input onChange={ (e) => { setEmail(e.target.value);
                if (email.length < 2){
                    setError("Email must be atleast 2 characters")
                } else{
                    setError("")
                }
                } } />            </div>
            <div>
                <label>Password: </label>
                <input onChange={ (e) => { setPassword(e.target.value);
                if (password.length < 7){
                    setError("Password must be atleast 8 characters")
                } else{
                    setError("")
                }
                } } />            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={ (e) => { setCpassword(e.target.value);
                if (cpassword !== password){
                    setError("Password must match")
                } else{
                    setError("")
                }
                } } />             </div>
        </form>
            
            <p> {error}</p>
            <p>Last Name : {lastname}</p>
            <p>E-mail: {email}</p>
            <p>Password : {password}</p>
            <p>Confirm Password : {cpassword}</p>
        </div>
    )
}

export default UserForm
