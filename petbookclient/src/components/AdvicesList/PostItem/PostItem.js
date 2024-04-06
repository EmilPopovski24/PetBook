
import { Link } from "react-router-dom";
import "./PostItem.css";

export const PostItem = ({
    problem, 
    _ownerId,
    _id
}) => {
    return(
        <div className='post-item'>
        <h3>Author:{_ownerId}</h3>
        <h5>{problem}</h5>
        <button className="account-buttons"><Link to={`/advices/${_id}`}>Assist</Link></button>
       <hr />
    </div>
    )
    
    

   
}