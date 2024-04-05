import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css';

const LoginKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        [LoginKeys.Email]: '',
        [LoginKeys.Password]: ''
    }, onLoginSubmit)

    return (     
        
        <>
        <section id = "login-page" className='auth'>
        <form className='login-form' method="POST" onSubmit={onSubmit} style={{width:"40%", margin:"80px auto" }}>
        <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Login form</h1>
            <div className="imgcontainer">
                <img src="https://fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876-1024x293.jpg" alt="Avatar" className="avatar" />
            </div>
            <div className="container" style={{textAlign:"center", fontFamily:"sans-serif"}}>
                <label htmlFor="email" style={{display:"block"}}><b>Email</b></label>
                <input type="email" placeholder="Enter Email" id="email" name={LoginKeys.Email} value={values[LoginKeys.Email]} onChange={changeHandler} />
               
                <label htmlFor="password" style={{display:"block"}}><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="password" name={LoginKeys.Password} value={values[LoginKeys.Password]} onChange={changeHandler} />
            <button style={{display:"block", margin:"10px auto"}} className='login-btn' type="submit">Login</button>
            </div>
            <div className="container" style={{"backgroundColor":"#f1f1f1"}}>
                <p className="registerOptionText" style={{textAlign:"center"}}>
                    You don't have a profile? ... Come on... Go to the <Link to={"/register"}><b>Register page</b></Link>
                </p>
            </div>
            </form>
            </section> 
            </> 
       
    );
}