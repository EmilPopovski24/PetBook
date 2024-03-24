import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


export const RouteGuard = () => {
    const { isAuthenticated } = useContext();

    if (!isAuthenticated) {
        return <Navigate to ="/login" />
    }
   
        return <Outlet />
}