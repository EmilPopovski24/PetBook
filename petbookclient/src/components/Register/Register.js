import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import './Register.css';

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }, onRegisterSubmit)

    return (
        <>
        <section id = "register-page" onSubmit={onSubmit} method="POST">
        <form className='register-form' style={{width:"40%", margin:"80px auto" }}>
        <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Register form</h1>
            <div className="imgcontainer">
                <img src="https://fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876-1024x293.jpg" alt="Avatar" className="avatar" />
            </div>
            <div className="container" style={{textAlign:"center", fontFamily:"sans-serif"}}>
                <label htmlFor="username" style={{display:"block"}}><b>Username</b></label>
                <input type="text" placeholder="Enter Username" id="username" name="username" value={values.username} onChange={changeHandler} required />
                <label htmlFor="email" style={{display:"block"}}><b>Email address</b></label>
                <input type="text" placeholder="Enter email address" id="email" name="email" value={values.email} onChange={changeHandler} required />
                <label htmlFor="password" style={{display:"block"}}><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="password" name="password" value={values.password} onChange={changeHandler} required />
                <label htmlFor="confirmPassword" style={{display:"block"}}><b>Confirm Password</b></label>
                <input type="password" placeholder="Re-enter Password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={changeHandler} required />
            <button style={{display:"block", margin:"10px auto"}} className="register-btn" type="submit">Register</button>
            </div>
            <div className="container" style={{"backgroundColor":"#f1f1f1"}}>
                <p className="registerOptionText" style={{textAlign:"center"}}>
                    You have a profile? ... Come on... Go to the <Link to={"/login"}><b>Login page</b></Link>
                </p>
            </div>
        </form>
        </section> 
        </> 
    )
}