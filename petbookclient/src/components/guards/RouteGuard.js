import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = AuthContext();

    if (!isAuthenticated) {
        return <Navigate to ="/login" />
    }
   
        return (
            <>
            {children}
            </>
        )
}