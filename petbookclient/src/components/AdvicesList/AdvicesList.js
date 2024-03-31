import { useForm } from '../../hooks/useForm';
import { Post } from './Post/Post';
import './AdvicesList.css';

export const AdvicesList = ({
    onPostSubmit,
    onCommentSubmit,
    posts,
    username
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        problem: '',
    }, onPostSubmit, onCommentSubmit)  

    return(
        <>
       <h1 className="adviceslist-header">AdvicesList</h1>       
       <h3 className='adviceslist-post'>Post your problem</h3>
       <form method="POST" className="problem-form" onSubmit={onSubmit}>
            <label htmlFor="username" style={{display:"block"}}><b>{username}</b></label>
            <textarea name="problem" id="problem" cols="30" rows="10" value={values.problem} onChange={changeHandler}></textarea>
            <button className='post-btn' type="submit">Post</button>
       </form>
       <div id='advices-page'>
            {posts.length > 0 && (
                <h1 className="catalog-posts">Please advise</h1>
            )}
            {posts.map(x=> <Post key={x._id} {...x} />)}
            {posts.length === 0 && (
                <h1 className="catalog-posts">No posts for now</h1>
            )}
        </div>

       </>
    )
}