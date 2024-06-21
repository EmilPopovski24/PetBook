import { Link } from "react-router-dom";
import "./PostItem.css";

export const PostItem = ({
    problem, 
    username,
    _id
}) => {
    
    return(
        <div className='post-item'>
            <h3>Author: {username}</h3>
            <h5>{problem}</h5>
            <button className="account-buttons"><Link to={`/advices/${_id}`}>Assist</Link></button>
            <hr />
        </div>
    ) 
};