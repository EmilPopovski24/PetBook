import './Header.css'

export const Header = () => {
    return (
        <>
        <ul className="navbar">
            <li className='logo'><a href="/">PetBook</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/addpet">Add Your Pet</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/about">About</a></li>
        </ul>
        </>
    )
}