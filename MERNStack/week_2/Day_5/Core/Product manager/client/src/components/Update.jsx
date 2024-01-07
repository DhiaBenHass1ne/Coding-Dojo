import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const Update = () => {
  const {id}=useParams();
  const[product,setProduct]=useState({title:"",price:"",description:""});
  const nav=useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then(response=>{console.log("PRODUCT ✔");setProduct(response.data)})
    .catch(error=>console.log("❌",error))
  },[])

  const addHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/api/products/${id}`,product)
      .then(nav("/"))
      .catch(error=>console.error(error))
  }
  return (
    <div>
      <h1 className='display-1'>Add a new product</h1>
      <form onSubmit={addHandler}>
        <label>Title:</label>
          <input type="text" className='form-control' name='title' onChange={(e)=>{setProduct({...product, title:e.target.value})}} value={product.title}/>
        <label>Price:</label>
          <input type="number" className='form-control' name='price' onChange={(e)=>{setProduct({...product, price:e.target.value})}} value={product.price}/>
        <label>Description:</label>
          <input type="text" className='form-control' name='description' onChange={(e)=>{setProduct({...product, description:e.target.value})}} value={product.description}/>
          <button className='btn btn-info'>ADD</button>
      </form>
      <Link to="/"><button className='btn btn-primary mt-5 '>Return ↩</button></Link>
    </div>
  )
}

export default Update
