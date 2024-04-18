
import { Link } from 'react-router-dom';
import './PetItem.css';

export const PetItem = ({
    name,
    _id,
    imageUrl,
}) => {

    return (
        <>
        <div className='pet-item'>
            <h1 id="pet-name">{name}</h1>
            {/* <h2>{}</h2> */}
            <div className='petitem-pic'>
                <Link to={`/catalog/${_id}`}><img src={imageUrl} alt={name} className='catalog-pic'/></Link>
            </div>
            {/* <ul>
                <li><h3>Type: {type}</h3></li>
                <li><h3>Breed: {breed}</h3></li>
                <li><h3>Age: {age}</h3></li>
                <li><h3>Color: {color}</h3></li>
            </ul> */}
            <button className="account-buttons"><Link to={`/catalog/${_id}`}>Visit Account</Link></button>
           <hr />
        </div>
        </>
    )
}