import { useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Detail = () => {

    const [character, setCharacter] = useState({
      
    })

    const { id } = useParams()
    const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
    const API_KEY = 'f90e002562a4.df250f92a69955e095ec'
    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
  return (
    <div>
        <h2>{character?.name}</h2>
        <h2>{character?.status}</h2>
        <h2>{character?.species}</h2>
        <h2>{character?.gender}</h2>
        <h2>{character?.origin?.name}</h2>
    
        <img src={character?.image} alt={character?.name} />
    </div>
  )
}

export default Detail