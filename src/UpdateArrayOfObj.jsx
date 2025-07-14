import { element } from 'prop-types';
import React,{useState} from 'react'

const UpdateArrayOfObj = () => {
    const [anime,setAnime]=useState([]);
    const [animeYear,setAnimeYear]=useState(new Date().getFullYear());
    const [animeName,setAnimeName]=useState("");
    const [animeMc,setAnimeMc]=useState("");

    const addAnime=()=>{
        const newAnime={year:animeYear,
                        name:animeName,
                        mc:animeMc};

        setAnime(a=>[...a,newAnime]);

        setAnimeYear(new Date().getFullYear());
        setAnimeName("");
        setAnimeMc("");

        
    }
    const removeAnime = (index) => {
        setAnime(a => a.filter((_, i) => i != index));
    };
    const addAnimeYear=(e)=>{
        setAnimeYear(e.target.value);
    }
    const addAnimeName=(e)=>{
        setAnimeName(e.target.value);
    }
    const addAnimeMc=(e)=>{
        setAnimeMc(e.target.value);

    }
    
    

    
  return (
    <div>
      <h1>List of Anime Objects</h1>
      <ul>
            {anime.map((anime,index)=>
                <li key={index} onClick={()=>removeAnime(index)} style={{cursor:'pointer'}}>
                    {anime.year} {anime.name} {anime.mc}

                </li>
            )}
      </ul>

      <input type='number' value={animeYear} onChange={addAnimeYear}/><br/>
      <input type='text' value={animeName} onChange={addAnimeName} placeholder='Enter Name..'/><br/>
      <input type='text' value={animeMc} onChange={addAnimeMc} placeholder='Enter MC Name..'/><br/>
      <button onClick={addAnime}>Add Anime</button>

    </div>
  )
}

export default UpdateArrayOfObj
