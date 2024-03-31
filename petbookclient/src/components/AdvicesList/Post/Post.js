import "./Post.css";

export const Post = ({
    problem,
    _ownerId
}) => {
    return (
        <div className="post">
            <h3 className="post-author">Author: {_ownerId}</h3>
            <p className="post-problem">{problem}</p>
        </div>
    )
}