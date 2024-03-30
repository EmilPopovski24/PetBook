import { useForm } from '../../hooks/useForm';
import './AdvicesList.css';

export const AdvicesList = ({
    onPostSubmit,
    posts
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        problem: '',
    }, onPostSubmit)   

    return(
        <>
       <h1 className="adviceslist-header">AdvicesList</h1>       
       <h3 className='adviceslist-post'>Post your problem</h3>
       <form method="POST" className="problem-form" onSubmit={onSubmit}>
            <textarea name="problem" id="problem" cols="30" rows="10" value={values.problem} onChange={changeHandler}></textarea>
            <button className='post-btn' type="submit">Post</button>
       </form>
       <div id='advices-page'>
            {posts.length > 0 && (
                <h1 className="catalog-pets">Pet Accounts</h1>
            )}
            {posts.map(x=> <Post key={x._id} {...x} />)}
            {posts.length === 0 && (
                <h1 className="catalog-pets">No pet accounts for now</h1>
            )}
        </div>

       </>
    )
}