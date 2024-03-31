import { useParams } from "react-router-dom";
import "./Post.css";

export const Post = ({
    problem,
    _ownerId, 

}) => {

    const postId = useParams();

    return (
        <div className="post">
            <h3 className="post-author">Author: {postId.username}</h3>
            <p className="post-problem">{problem}</p>
            <div className="comments-div">
                <h5>Comments:</h5>
                <ul className="comments-list"> 
                    {problem.comments && Object.values(problem.comments).map(x=> (
                        <li key={x._id} className="comment-li">
                        <p>{postId.username}: {x.comment}</p>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}