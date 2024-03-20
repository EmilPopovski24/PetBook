import { requestFactory } from "./requester";

const profileUrl = 'http://localhost:3030/data/pictures';

export const profileServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const addPhoto = (photo) => {
        const result = request.post(`${profileUrl}`, photo);
        return result
    }

    const getOne = async(photoId) => {
        const result = await request.get(`${profileUrl}`);
        return result;
    }
    
    return {
       addPhoto,
       getOne,
    }
}