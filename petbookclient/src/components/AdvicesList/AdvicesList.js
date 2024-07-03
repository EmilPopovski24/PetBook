import { PostItem } from './PostItem/PostItem';
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
            {posts.map(x=> <PostItem key={x._id} {...x} />)}
            {posts.length === 0 && (
                <h1 className="catalog-posts">Nothing to advice yet</h1>
            )}
        </div>
       </>
    )
}