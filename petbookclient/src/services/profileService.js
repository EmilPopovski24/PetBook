import { requestFactory } from "./requester";

const profileUrl = 'http://localhost:3030/data/pictures';

export const profileServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const addPhoto = (photo) => {
        const result = request.post(`${profileUrl}`, photo);
        return result
    }
    
    return {
       addPhoto,
    }
}