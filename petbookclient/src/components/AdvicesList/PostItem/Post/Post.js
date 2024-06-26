import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useService } from '../../../../hooks/useService';
import { profileServiceFactory } from '../../../../services/profileService';
import { commentServiceFactory } from '../../../../services/commentService';
import './Post.css';

export const Post = () => {

    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({})
    const profileService = useService(profileServiceFactory);
    const commentService = useService(commentServiceFactory)
    const { postId } = useParams();

    useEffect(() => {
        profileService.getOnePost(postId)
            .then(result => {
                setPost(result)
                return commentService.getAllComments(postId)
            })
            .then(result => {
                setComments(result)
        })
    }, [postId]);

    const onCommentSubmit = (e) => {
        e.preventDefault()
        const response = commentService.addComment({
            postId,
            username,
            comment,
        })
        setPost(state => ({
            ...state, 
            comments: [...comments, response]
        }))

        setUsername('');
        setComment('');
        return commentService.getAllComments(postId)
    };

    return (
        <div className="post-comment">
            <h3 className="post-author">{post.username} wrote:</h3>
            <p className="post-problem">{post.problem}</p>
            <div className="addComment-div">
                <form className="addComment-form" onSubmit={onCommentSubmit}>
                    <textarea name="comment" id="comment-text" cols="50" rows="3" value={comment} onChange={(e)=> setComment(e.target.value)} ></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
            <div className="comments-div">
                <h3>Comments:</h3>
                <ul className='comments-ul'>
                    {comments.map(x=> (
                        <li key={x._id} className='comment-li'>
                            <p><b>{x.author.username}</b>: {x.comment}</p>      
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}