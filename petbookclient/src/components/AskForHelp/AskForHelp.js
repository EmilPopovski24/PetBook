import { useForm } from "../../hooks/useForm"
import './AskForHelp.css';

export const AskForHelp = ({
    onPostSubmit, 
    username
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        problem: '',
    }, onPostSubmit)  

    const onPostSbnmit = () => {
        return null
        }

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