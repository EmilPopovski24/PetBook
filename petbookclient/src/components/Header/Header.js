import './Header.css'

export const Header = () => {
    return (
        <>
        <ul className="navbar">
            <div className='logo-div'>
                <li className='logo'><a href="/">PetBook</a></li>
            </div>
                <li className='header-links'><a href="/">Home</a></li>
                <li className='header-links'><a href="/login">Login</a></li>
                <li className='header-links'><a href="/register">Register</a></li>
                <li className='header-links'><a href="/logout">Logout</a></li>
                <li className='header-links'><a href="/addpet">Add Your Pet</a></li>
                <li className='header-links'><a href="/catalog">Catalog</a></li>
                <li className='header-links'><a href="/about">About</a></li>
        </ul>
        </>
    )
}