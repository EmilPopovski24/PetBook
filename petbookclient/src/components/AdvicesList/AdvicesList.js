import { Post } from './Post/Post';
import './AdvicesList.css';
import { Link } from 'react-router-dom';

export const AdvicesList = ({
    posts,
}) => {
    console.log(posts)
    return(
        <> 
        <div id='advices-page'>
            {posts.length > 0 && (
                <h1 className="catalog-posts">Please advise</h1>
            )}
            {posts}
            {posts.length === 0 && (
                <h1 className="catalog-posts">No posts for now</h1>
            )}
        </div>
       </>
    )
}