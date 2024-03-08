import { Link } from "react-router-dom"

export const ProfilePet = ({
    name,
    _id
}) => {
    return(
        <>
        <Link to={`/catalog/${_id}`}>{name}</Link>
        </>
    )
}