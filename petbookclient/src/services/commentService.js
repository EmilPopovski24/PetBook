import { requestFactory } from "./requester";

const commentsUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const addComment = async(data) => {
        const result = await request.post(commentsUrl, data)
        return result;
    };

    const getAllComments = async(postId) => {
        const query = encodeURIComponent(`postId="${postId}"`);
        const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${commentsUrl}?where=${query}&load=${author}`);
        // const comments = Object.values(result)
        return result
    };
    
    return {
        addComment,
        getAllComments    
    }
}