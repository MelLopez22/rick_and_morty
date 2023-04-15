import React, { useState , useEffect} from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";

const email = "mel@gmail.com";
const password = "123asd";

function App() {
  
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
  const API_KEY = "f90e002562a4.df250f92a69955e095ec";
  const [acces, setAcces] = useState(false)
  const navigate = useNavigate()

  const login = (userData)=>{
    if(userData.email === email && userData.password === password ){
      setAcces(true)
      navigate('/home')
    }

  }

useEffect(()=>{
  !acces && navigate('/')
}, [acces])

  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  //esta funcion me cierra y saca el personaje
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
