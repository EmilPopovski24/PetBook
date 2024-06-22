import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css"

export const Profile = ({
    image
}) => {

    const user = useContext(AuthContext);

    return(
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <div className="personal-info">
                <img src={image.imageUrl} alt="profile-pic" className="profile-pic"/>
                <button className="add-photo"><Link to={'/profile/addphoto'}>Add your Photo</Link></button>
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.userEmail}</li>
                    </ul>   
                </div>     
            </div>
        </>
    )
}