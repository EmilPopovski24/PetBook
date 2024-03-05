import './Footer.css'

export const Footer = () => {
    return (
        <>
        <ul className="footer">
            <h5 className='footer-logo'>© 2024 PetBook</h5>
            <li className='footer-links'><a href="/terms">Terms and Conditions</a></li>
            <li className='footer-links'><a href="/faq">FAQ</a></li>
        </ul>
        </>
    )
}