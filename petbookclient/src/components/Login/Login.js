import { Link } from 'react-router-dom';
import './Login.css'

export const Login = () => {
    return (
        <>
        
        <form className='login-form'>
        <h1>Login form</h1>
            <div className="imgcontainer">
                <img src="https://fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876-1024x293.jpg" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
            </div>

            <div class="container" style={{"background-color":"#f1f1f1"}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <Link to="#">password?</Link></span>
            </div>
            </form>
            </> 
       
    );
}