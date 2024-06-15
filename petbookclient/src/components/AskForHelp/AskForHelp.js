import { useContext } from "react";
import { useForm } from "../../hooks/useForm"
import './AskForHelp.css';
import { AuthContext } from "../../contexts/AuthContext";

export const AskForHelp = ({
    onPostSubmit, 
    username
}) => {

    const user = useContext(AuthContext)

    const {values, changeHandler, onSubmit} = useForm({
        problem: '',
        username: user.username
    }, onPostSubmit) ;

    return (
        <>
        <h1 className="help-header">Ask For Help</h1>
            <h3 className='adviceslist-post'>Post your problem</h3>
            <form method="POST" className="problem-form" onSubmit={onSubmit}>
                <label htmlFor="username" style={{display:"block"}}><b>{username}</b></label>
                <textarea name="problem" id="problem" cols="30" rows="10" value={values.problem} onChange={changeHandler}></textarea>
                <button className='post-btn' type="submit">Post</button>
            </form>
        </>
    )
}