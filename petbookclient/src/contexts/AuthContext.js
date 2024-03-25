import { createContext, useContext, useState } from "react"; 
import { authServiceFactory } from '../services/authService'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken);
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        const result = await authService.login(data);
        setAuth(result)
        navigate('/catalog')
        alert("You are welcome!")
    };
    

    const onRegisterSubmit = async(values) => {
        const { confirmPassword, ...registerData } = values;
        if(confirmPassword !== registerData.password) {
          alert("Both passwords do not match!")
          return;
        };
    
        try {
            const result = await authService.register(values);
            setAuth(result);     
            alert("Successful registration") 
            navigate('/catalog')
        } catch (error) {
            alert("User with the same details (email or username) already exists!")
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken //truthy - false and vice versa
      };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}