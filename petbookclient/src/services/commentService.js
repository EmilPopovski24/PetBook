import { requestFactory } from "./requester";

const commentsUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const addComment = async(data) => {
        const result = await request.post(`${commentsUrl}`,data)
        const comment = Object.values(result)
        return comment;
    }

    const getAllComments = async(postId) => {
        const query = encodeURIComponent(`postId="${postId}"`);
        const result = await request.get(`${commentsUrl}?where=${query}`)
        return result
    }
    return {
        addComment,
        getAllComments
    }
}