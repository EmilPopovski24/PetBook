import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


export const RouteGuard = () => {
    const { isAuthenticated } = AuthContext();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login')
        return ;
    }
   
        return <Outlet />
}