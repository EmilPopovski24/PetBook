import { requestFactory } from "./requester";

const commentsUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    // const addComment = (postId, comment) => {
    //     const result = request.post(`${commentsUrl}`,{postId, comment} )
    //     return result;
    // }

    const getAllComments = async(postId) => {
        return null
    }
    return {
        addComment,
        getAllComments
    }
}