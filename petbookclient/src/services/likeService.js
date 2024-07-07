import { requestFactory } from "./requester";

const likesUrl = 'http://localhost:3030/data/likes';

export const likeServiceFactory = (token) => {

    const request = requestFactory(token);

    const addLike = async(data) => {
        const result = await request.post(likesUrl, data)
        return result;
    };


    return {
        addLike
    }
}