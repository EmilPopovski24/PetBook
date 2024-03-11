import './PetItem.css';
import { Link } from 'react-router-dom';

export const PetItem = ({
    name,
    type,
    breed,
    age,
    color, 
    _id,
    imageUrl,
}) => {
    return (
        <>
        <div className='pet-item'>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} />
            <ul>
                <li><h3>Type: {type}</h3></li>
                <li><h3>Breed: {breed}</h3></li>
                <li><h3>Age: {age}</h3></li>
                <li><h3>Color: {color}</h3></li>
            </ul>
            <button className="account-buttons"><Link to={`/catalog/${_id}`}>Visit Account</Link></button>
           <hr />
        </div>
        </>
    )
}