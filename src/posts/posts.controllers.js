const Posts = require("../models/posts.models")

const findAllPosts = async() => {
    //? Your code here:
    const data=await Posts.findAll()
    return data

}

const findPostById = async(id) => {
    //? Your code here:
    const data = await Posts.findOne({
        where: {
            id : id
        }
    })
    return data
}

const createPost = async(obj) => {
    //? Your code here:
    const newPost = {
        content: obj.content,
        userName: obj.userName,
        isPublished : obj.published
    }

    const data = await Posts.create(newPost)
    return data
}

const updatePost = async(id, PostObj) => {
    //? Your code here:
    const data = await Posts.update(PostObj, {
        where: {
            id : id
        }
    })
    return data
}

const deletePost = async(id) => {
    //? Your code here:
    const data = await Posts.destroy({
        where: {
            id: id
        }
    })
    return data

}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
