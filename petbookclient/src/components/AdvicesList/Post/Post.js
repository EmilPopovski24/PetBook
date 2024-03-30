import "./Post.css";

export const Post = ({
    problem,
    _ownerId
}) => {
    return (
        <div className="post">
            <h3>Author: {_ownerId}</h3>
            <p>{problem}</p>
        </div>
    )
}