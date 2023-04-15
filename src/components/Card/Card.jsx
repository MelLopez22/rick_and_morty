import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({id, name, status, species, gender, origin, image, onClose})=> {

  

   return (
      <div className='container'>
         
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

export default Card
