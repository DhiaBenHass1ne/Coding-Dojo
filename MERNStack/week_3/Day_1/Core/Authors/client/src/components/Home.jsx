import React, { useEffect, useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const [authors,setAuthors]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/authors")
            .then(response=>{console.log("SUCCES");setAuthors(response.data)})
            .catch(error=>console.log("ERROR ❌",error))
    },[]);
    const deleteAuthor = (id) =>{
        axios.delete(`http://localhost:5000/api/authors/${id}`)
            .then(res=>{setAuthors(authors.filter((p)=>p._id!==id));console.log("DELETED 👍",res)})
            .catch(error=>console.log(error))
    }
  return (
    <div>
        <h1 className='display-1'>Authors Manager</h1>
        <Link to={"/create"}><button className='btn btn-dark mb-5 '>Add A New Author</button></Link>
        <table className='table table-bordered'>
            <thead className='table-dark'>
                <tr>
                    <th>
                        Author
                    </th>
                    <th colSpan="2">
                        Options
                    </th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                {authors? authors.map(one_author=>
                <tr key={one_author._id}>
                    <td>{one_author.fullName}</td>
                    <td><Link to={`/author/update/${one_author._id}`}><button className='btn btn-warning'>Edit</button></Link></td>
                    <td><button className='btn btn-danger' onClick={()=>deleteAuthor(one_author._id)}>Delete</button></td>

                </tr>):<tr><td>LOADING 🔁</td></tr>}
            </tbody>
        </table>
    </div>
)
}

export default Home
