import React from 'react'
import { useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Display = () => {
  const {id,search} = useParams();
  const [selected,setSelected] = useState("");
  const [obi,setObi]=useState("");
  useEffect(() => {
  axios.get(`https://swapi.dev/api/${search}/${id}/`).then((res)=>{setSelected(res.data);setObi("")}).catch((err)=>{setSelected(""); setObi("https://media.pinatafarm.com/protected/B183D0EF-49B8-47BF-A523-E72FD0CFFAAC/Obi-Wan-Kenobi.0.meme.webp")});
},[search,id]);
  return (
    <div>
      {selected ? search==="people"? (<>
                    <h1>Name:<span style={{color:"blue"}}> {selected.name}</span></h1>
                    <h1>Birth Year: <span style={{color:"blue"}}> {selected.birth_year}</span></h1>
                    <h1>Mass: <span style={{color:"blue"}}> {selected.mass}</span></h1>
                    <h1>Height: <span style={{color:"blue"}}> {selected.height}</span></h1>
      </>):((<>
                    <h1>Planet Name: <span style={{color:"blue"}}> {selected.name}</span></h1>
                    <h1>Climate: <span style={{color:"blue"}}> {selected.climate}</span></h1>
                    <h1>Terrain: <span style={{color:"blue"}}> {selected.terrain}</span></h1>
                    <h1>Population: <span style={{color:"blue"}}> {selected.population}</span></h1>
      </>)) :obi?(<><img src={obi} alt="obi" /></>):
      ("LOADING...")}
    </div>
  )
}

export default Display
