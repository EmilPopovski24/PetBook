import './PetItem.css';
import { Link } from 'react-router-dom';

export const PetItem = ({
    name,
    type,
    breed,
    age,
    color, 
    _id
}) => {
    return (
        <>
        <div className='pet-item'>
            <h1>{name}</h1>
            <h3>Type: {type}</h3>
            <h3>Breed: {breed}</h3>
            <h3>Age: {age}</h3>
            <h3>Color: {color}</h3>
            {/* <button className="account-buttons">Edit</button>
            <button className="account-buttons">Delete</button> */}
            <button className="account-buttons"><Link to={`/catalog/${_id}`}>Visit Account</Link></button>
           <hr />
        </div>
        </>
    )
}