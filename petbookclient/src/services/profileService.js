import { requestFactory } from "./requester";

const profileUrl = 'http://localhost:3030/data';

export const profileServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const addPhoto = (photo) => {
        const result = request.post(`${profileUrl}/pictures`, photo);
        return result
    };

    const getOne = async(photoId) => {
        const result = await request.get(`${profileUrl}/pictures`, photoId);
        return result;
    };

    const addPost = (post) => {
        const result = request.post(`${profileUrl}/posts`, post)
        return result;
    };
    
    return {
       addPhoto,
       getOne,
       addPost,
    }
}