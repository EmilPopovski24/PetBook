import { Link } from 'react-router-dom';
import './PetItem.css';

export const PetItem = ({
    name,
    _id,
    imageUrl
}) => {

    return (
        <>
        <div className='pet-item'>
            <h1 className="pet-name">{name}</h1>
            <div className='petitem-pic'>
                {/* <Link to={`/catalog/${_id}`}><img src={imageUrl} alt={name} className='catalog-pic'/></Link> */}
            </div>
            <button className="account-buttons"><Link to={`/catalog/${_id}`}>Visit Account</Link></button>
           <hr />
        </div>
        </>
    )
}