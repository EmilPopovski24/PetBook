import { useParams } from "react-router-dom";
import "./Post.css";
import { useForm } from "../../../hooks/useForm";
import { useService } from "../../../hooks/useService";
import { commentServiceFactory } from "../../../services/commentService";

export const Post = ({
    problem,
    _ownerId,
    onCommentSubmit
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        comment:''
    },onCommentSubmit)
    const postId = useParams();

    return (
        <div className="post">
            <h3 className="post-author">Author: {_ownerId}</h3>
            <p className="post-problem">{problem}</p>
            <div className="addComment-div">
                <form method="POST" className="addComment-form" onSubmit={onSubmit}>
                    <h5>Add a comment:</h5>
                    <textarea name="comment" id="comment" cols="100" rows="2" value={values.comment} onChange={changeHandler}></textarea>
                    <button className='post-btn' type="submit">Post</button>
                </form>
            </div>
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