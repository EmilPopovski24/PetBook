import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import "./Post.css";

export const Post = ({
    onCommentSubmit,
    problem,
    _ownerId, 
}) => {

    const {values, changeHandler} = useForm({
        comment:'',
    }, onCommentSubmit)

    const postId = useParams();

    return (
        <div className="post-comment">
            <h3 className="post-author">Author: {_ownerId}</h3>
            <p className="post-problem">{problem}</p>
            <div className="addComment-div">
                <form method="POST" className="addComment-form" >
                    <textarea name="comment" cols="100" rows="2" value={values.comment} onChange={changeHandler}></textarea>
                    <button className='post-btn' type="submit" onClick={onCommentSubmit}>Add comment</button>
                </form>
            </div>
            <div className="comments-div">
                <h5>Comments:</h5>
                <ul className="comments-list"> 
                    {problem.comments && Object.values(problem.comments).map(x=> (
                        <li key={x._id} className="comment-li">
                        <p>Comment: {x.comment}</p>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}