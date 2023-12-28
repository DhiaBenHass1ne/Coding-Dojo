import { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [allPoke,setAllPoke]= useState([])
  const pokemons = (e)=>{
    e.preventDefault()
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
          .then(response => {
            setAllPoke(response.data.results)
        });
  }
  return (
    <div className="App">
      <button onClick={pokemons}>Fetch Pokemon</button>
      <ul>
      {allPoke.map((one_poke,idx)=>{return<li key={idx}>{one_poke.name}</li>})}
      </ul>
    </div>
  );
  }

export default App;
