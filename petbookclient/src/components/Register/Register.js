import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);


    return (
        <>
        <section id = "register-page">
        <form className='register-form' style={{width:"40%", margin:"80px auto" }}>
        <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Register form</h1>
            <div className="imgcontainer">
                <img src="https://fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876-1024x293.jpg" alt="Avatar" className="avatar" />
            </div>

            <div className="container" style={{textAlign:"center", fontFamily:"sans-serif"}}>
                <label for="uname" style={{display:"block"}}><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="email" style={{display:"block"}}><b>Email address</b></label>
                <input type="text" placeholder="Enter email address" name="email" required />

                <label for="psw" style={{display:"block"}}><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label for="psw" style={{display:"block"}}><b>Confirm Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

            <button style={{display:"block", margin:"10px auto"}} type="submit">Login</button>
            </div>

            <div class="container" style={{"background-color":"#f1f1f1"}}>
                <p className="registerOptionText" style={{textAlign:"center"}}>
                    You have a profile? ... Come on... Go to the <Link to={"/login"}><b>Login page</b></Link>
                </p>
            </div>
            </form>
            </section> 
            </> 
    )
}