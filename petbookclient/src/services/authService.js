import { requestFactory } from "./requester";

const userUrl = "http://localhost:3030/users"

export const authServiceFactory = (token) => {

    const request = requestFactory(token);
    
    return {
        login:(loginData) => request.post(`${userUrl}/login`, loginData),
        register: (registerData) =>  request.post(`${userUrl}/register`, registerData),
        logout:() => request.get(`${userUrl}/logout`)
    };  
};