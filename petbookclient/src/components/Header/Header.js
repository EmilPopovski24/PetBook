import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
        <ul className="navbar">
            {/* <div className='logo-div'> */}
                <li className='logo'><Link to="/">PetBook</Link></li>
            {/* </div> */}
                <li className='header-links'><Link to="/">Home</Link></li>
                <li className='header-links'><Link to="/login">Login</Link></li>
                <li className='header-links'><Link to="/register">Register</Link></li>
                <li className='header-links'><Link to="/logout">Logout</Link></li>
                <li className='header-links'><Link to="/addpet">Add Your Pet</Link></li>
                <li className='header-links'><Link to="/catalog">Catalog</Link></li>
                <li className='header-links'><Link to="/about">About</Link></li>
        </ul>
        </>
    )
}