import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { useContext } from 'react';



export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);

    return (
        <>
        <section id = "login-page">
        <form className='login-form' onSubmit={onSubmit} style={{width:"40%", margin:"80px auto" }}>
        <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Login form</h1>
            <div className="imgcontainer">
                <img src="https://fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876-1024x293.jpg" alt="Avatar" className="avatar" />
            </div>

            <div className="container" style={{textAlign:"center", fontFamily:"sans-serif"}}>
                <label for="uname" style={{display:"block"}}><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw" style={{display:"block"}}><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

            <button style={{display:"block", margin:"10px auto"}} type="submit">Login</button>
            </div>

            <div class="container" style={{"background-color":"#f1f1f1"}}>
                <p className="registerOptionText" style={{textAlign:"center"}}>
                    You don't have a profile? ... Come on... Go to the <Link to={"/register"}><b>Register page</b></Link>
                </p>
            </div>
            </form>
            </section> 
            </> 
       
    );
}