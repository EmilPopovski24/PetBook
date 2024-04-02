import { Post } from './Post/Post';
import './AdvicesList.css';

export const AdvicesList = ({
    posts
}) => {

    return(
        <> 
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