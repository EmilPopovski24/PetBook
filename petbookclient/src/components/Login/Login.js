import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
        <h1>Login form</h1>
        <form action="action_page.php" method="post" />
            <div class="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" class="avatar" />
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
            </div>

            <div class="container" style={{"background-color":"#f1f1f1"}}>
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <Link to="#">password?</Link></span>
            </div>
            </> 
       
    );
}