

export const Profile = ({
    username,
    userEmail
}) => {

    return(
        <>
        <h1>MyProfile</h1>
        <h3>Personal Info</h3> 
            <ul>
                <li>Username: {username}</li>
                <li>Email: {userEmail}</li>

            </ul>
        </>
    )
}