import './AdvicesList.css';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

export const AdvicesList = () => {

    const {values, changeHandler, onSubmit} = useForm({
        problem: '',
    }, )

    const [posts, setPosts] = useState([]);

    return(
        <>
       <h1 className="adviceslist-header">AdvicesList</h1>       
       <h3 className='adviceslist-post'>Post your problem</h3>
       <form method="POST" className="problem-form" onSubmit={onSubmit}>
            <textarea name="problem" id="problem" cols="30" rows="10" value={values.problem} onChange={changeHandler}></textarea>
            <button className='post-btn' type="submit">Post</button>
       </form>
       </>
    )
}