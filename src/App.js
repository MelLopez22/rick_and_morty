import React, { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'f90e002562a4.df250f92a69955e095ec'
  //esta funcion agrega mis personajes
  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(
      ({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  //esta funcion me cierra y saca el personaje
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
     

      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />

  
    </div>
  );
}

export default App;
