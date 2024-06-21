import { requestFactory } from "./requester";

const userUrl = 'http://localhost:3030/users/me';

export const userServiceFactory = (token) => {

    const request = requestFactory(token);

    const getOneUser = async() => {
        const result = await request.get(`${userUrl}`);
        return result;
    }
    
    return {
        getOneUser
    }
}