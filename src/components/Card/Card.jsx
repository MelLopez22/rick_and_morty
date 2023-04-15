import { Link } from 'react-router-dom';
import './Card.css'
import { addFav, removeFab } from '../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFab, myFavorites})=> {

const [isFav, setIsFav]=useState(false)

const handleFavorite = ()=>{
   if(isFav){
      setIsFav(false)
      removeFab(id)
}else{
   setIsFav(true)
   addFav({id, name, species, gender, image})
}
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

   return (
      <div className='container'>
         
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

         <button onClick={ ()=> onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt=''/>
         
      </div>
   );
}


const mapDispatchToProps = (dispatch)=>{
return {
   addFav: (character) =>{dispatch(addFav(character))},
   removeFab: (id) =>{dispatch(removeFab(id))}
}
}

const mapStateToProps = (state)=>{
return {
   myFavorite : state.myFavorites
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
