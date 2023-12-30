import './App.css';
import {Routes,Route, useNavigate} from "react-router-dom";
import Display from './components/Display';
import { useState } from 'react';
function App() {
  const [search, setSearch]=useState("people");
  const [id, setId]=useState("1");
  const navigate = useNavigate();

  const formHandler =(e)=>{
    e.preventDefault();
    navigate(`/${search}/${id}`)
  }
  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <label>Search For :</label>
        <select onChange={(e)=>{setSearch(e.target.value)}}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label>ID:</label>
        <input type="number" onChange={(e)=>{setId(e.target.value)}}/>
        <button >Search</button>
      </form>
      <Routes>
        <Route path="/:search/:id" element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
