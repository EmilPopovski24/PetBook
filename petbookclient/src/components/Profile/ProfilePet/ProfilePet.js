import { Link } from "react-router-dom";

export const ProfilePet = ({
    name,
    _id,
}) => {

    return(
        <>
            <div className="profile-pet"></div>
            <Link to={`/catalog/${_id}`}>{name}</Link>
        </>
    )
}