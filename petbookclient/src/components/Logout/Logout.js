import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"; 

export const Logout = () => {
        const { onLogout } = useContext(AuthContext);
        onLogout();
        return <Navigate to='/login' />
};