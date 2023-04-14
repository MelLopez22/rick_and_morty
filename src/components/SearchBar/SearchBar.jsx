import { useState } from "react";

export default function SearchBar({ onSearch }) {
   //para que hago esto ? para ir guardando el valor de value ? para q?
  const [id, setId] = useState("");

  const handleChange = (event) => {
   //target es quien ejecuta y el value es lo que estamos ingresando en el input 
    setId(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
