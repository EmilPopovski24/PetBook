import { PostItem } from './Post/PostItem';
import './AdvicesList.css';

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
            {posts.map(x=> <PostItem key={x._id} {...x} />)}
            {posts.length === 0 && (
                <h1 className="catalog-posts">No posts for now</h1>
            )}
        </div>
       </>
    )
}