import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const[newAuthor,setNewAuthor]=useState({fullName:""});
  const[errors,setErrors]=useState({});
  const nav=useNavigate();

  const addHandler = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/authors",newAuthor)
      .then(res=>nav("/"))
      .catch(error=>setErrors(error.response.data.errors))
  }
  return (
    <div>
      <h1 className='display-1'>Add a new author</h1>
      <form onSubmit={addHandler}>
        <label>Name:</label>
          {errors.fullName && errors.fullName.message ? <p className='text-danger' style={{textTransform: 'capitalize'}}>{errors.fullName.message}</p>:<></>}
          <input type="text" className='form-control' name='fullName' onChange={(e) => {setNewAuthor({ ...newAuthor, fullName: e.target.value });}}/>
          <button className='btn btn-info'>ADD</button>
      </form>
      <Link to="/"><button className='btn btn-primary mt-5 '>Return ↩</button></Link>
    </div>
  )
}

export default Create
