

export const Profile = () => {

    return(
        <>
        <h1>MyProfile</h1>
        <h3>Personal Info</h3> 
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.userEmail}</li>

            </ul>
        </>
    )
}