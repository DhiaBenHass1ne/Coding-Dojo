import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const Update = () => {
  const {id}=useParams();
  const[author,setAuthor]=useState({fullName:""});
  const[errors,setErrors]=useState({})
  const nav=useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/authors/${id}`)
    .then(response=>{console.log("author ✔");setAuthor(response.data)})
    .catch(error=>setErrors(error.response.data.errors))
  },[])

  const editHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/api/authors/${id}`,author)
      .then((res)=>nav("/"))
      .catch(error=>setErrors(error.response.data.errors))
  }
  return (
    <div>
      <h1 className='display-1'>Edit author</h1>
      <form onSubmit={editHandler}>
        <label>Name:</label>
        {errors.fullName? <p className='text-danger' style={{textTransform: 'capitalize'}}>{errors.fullName.message}</p>:<></>}
          <input type="text" className='form-control' name='fullName' onChange={(e)=>{setAuthor({...author, fullName:e.target.value})}} value={author.fullName}/>
          <button className='btn btn-info'>Edit</button>
      </form>
      <Link to="/"><button className='btn btn-primary mt-5 '>Return ↩</button></Link>
    </div>
  )
}

export default Update
