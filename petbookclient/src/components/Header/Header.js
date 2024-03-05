import { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <>
        <ul className="navbar">
                <li className='header-links' id="logo"><Link to="/">PetBook</Link></li>
                <li className='header-links'><Link to="/">Home</Link></li>
            {!isAuthenticated && (
                <div className='authenticated'>
                    <li className='header-links'><Link to="/login">Login</Link></li>
                    <li className='header-links'><Link to="/register">Register</Link></li>
                </div>
            )}
            {isAuthenticated && (
                <div>
                    <li className='header-links'><Link to="/addpet">Add Your Pet</Link></li>
                    <li className='header-links'><Link to="/catalog">Catalog</Link></li>
                    <li className='header-links'><Link to="/logout">Logout</Link></li>
                </div>
            )}                 
            <li className='header-links'><Link to="/about">About</Link></li>
            {isAuthenticated && (
                <li className='header-username'>Hello, {username}</li>
            )}
        </ul>
        </>
    )
}