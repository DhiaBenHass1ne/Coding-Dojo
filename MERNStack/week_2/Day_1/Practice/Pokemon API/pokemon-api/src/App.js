import { useState } from 'react';
import './App.css';

function App() {
  const [allPoke,setAllPoke]= useState([])
  const pokemons = (e)=>{
    e.preventDefault()
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            setAllPoke(response.results)
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response.results);
        }).catch(err=>{
            console.log(err);
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
