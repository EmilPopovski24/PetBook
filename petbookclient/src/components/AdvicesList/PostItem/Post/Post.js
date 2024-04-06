import { useParams } from 'react-router-dom';
import './Post.css';
import { useState, useEffect } from 'react';
import { useService } from '../../../../hooks/useService';
import { profileServiceFactory } from '../../../../services/profileService';
import { commentServiceFactory } from '../../../../services/commentService';

export const Post = () => {

    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const [post, setPost] = useState({})
    const profileService = useService(profileServiceFactory);
    const commentService = useService(commentServiceFactory)
    const { postId } = useParams();

    useEffect(() => {
        profileService.getOnePost(postId)
            .then(result => {
                setPost(result)
            })
    }, [postId]);

    useEffect(()=> {
        commentService.getAllComments(postId)
        .then(result => {
            setComments
        })
    })
    const onCommentSubmit = async (e) => {
        e.preventDefault();
        await commentService.addComment({
            postId,
            username,
            comment
        })
        
        setUsername('');
        setComment('');
    };

    return (
        <div className="post-comment">
            <h3 className="post-author">Author: {postId._ownerId}</h3>
            <p className="post-problem">{postId.problem}</p>
            <div className="addComment-div">
                <form className="addComment-form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder="Your name..."  value={username} onChange={(e)=> setUsername(e.target.value)} />
                    <textarea name="comment" cols="100" rows="2" value={comment} onChange={(e)=> setComment(e.target.value)} ></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
            <div className="comments-div">
                <h5>Comments:</h5>
                {/* <ul className="comments-list">          
                    {problem.comments && Object.values(problem.comments).map(x=> (
                        <li key={x._id} className="comment-li">
                        <p>Comment: {problem}</p>                   
                        </li>
                    ))} 
                </ul> */}
            </div>
        </div>
    )
}