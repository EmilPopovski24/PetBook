import { requestFactory } from "./requester";

const profileUrl = 'http://localhost:3030/data';

export const profileServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const addPhoto = (photo) => {
        const result = request.post(`${profileUrl}/pictures`, photo);
        return result
    };

    const getOnePhoto = async(photoId) => {
        const result = await request.get(`${profileUrl}/pictures`, photoId);
        return result;
    };

    const addPost = (post) => {
        const result = request.post(`${profileUrl}/posts`, post)
        return result;
    };

    const getOnePost = async(postId) => {
        const result = await request.get(`${profileUrl}/posts/${postId}`, postId)
        return result;
    }

    const addPetComment = async(petId, commentData) => {
        const result = await request.post(`${profileUrl}/petComments`, petId, commentData)
        return result
    }

    const getAllPetComments =  async(petId) => {
        const query = encodeURIComponent(`petId="${petId}"`);
        const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${profileUrl}/petComments/?where=${query}&load=${author}`);
        const comments = Object.values(result)
        if(comments.length === 0) {
            return
        }
        return comments
    };

    return {
       addPhoto,
       getOnePhoto,
       addPost,
       getOnePost,
       addPetComment,
       getAllPetComments
    }
}