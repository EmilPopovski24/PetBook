import { useForm } from "../../../hooks/useForm";
import "./Post.css";
import { commentServiceFactory } from "../../../services/commentService";
import { useState } from "react";
import { useService } from "../../../hooks/useService";
import { useParams } from "react-router-dom";

export const Post = ({
    problem,
    _ownerId }) => {

    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState();
    const commentService = useService(commentServiceFactory);
    const  { postId } = useParams();
    const {values, changeHandler} = useForm({
        comment:'',
    });

    const onCommentSubmit = (e) => {
        e.preventDefault();
        commentService.addComment({
            postId,
        })
    }



    return (
        <div className="post-comment">
            <h3 className="post-author">Author: {_ownerId}</h3>
            <p className="post-problem">{problem}</p>
            <div className="addComment-div">
                <form className="addComment-form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder="Your name..." value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" cols="100" rows="2" value={values.comment} onChange={changeHandler}></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
            <div className="comments-div">
                <h5>Comments:</h5>
                <ul className="comments-list">          
                    {problem.comments && Object.values(problem.comments).map(x=> (
                        <li key={x._id} className="comment-li">
                        <p>Comment: {problem}</p>                   
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}