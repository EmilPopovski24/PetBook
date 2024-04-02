import { requestFactory } from "./requester";

const commentsUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const addComment = async(data) => {
        const result = await request.post(`${commentsUrl}`,data)
        console.log(result)
        return result;
    };

    const getAllComments = async(postId) => {
        const query = encodeURIComponent(`postId="${postId}"`);
        const result = await request.get(`${commentsUrl}?where=${query}`);
        const comments = Object.values(result)
        return comments
    };
    
    return {
        addComment,
        getAllComments
    }
}