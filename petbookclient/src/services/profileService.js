import { requestFactory } from "./requester";

const profileUrl = 'http://localhost:3030/data/profile';

export const profileServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const addPhoto = async(photo) => {
        const result = await request.post(`${profileUrl}/photo`, photo);
        return result
    }
    
    return {
       addPhoto
    }
}