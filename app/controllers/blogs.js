const Blog = require('./../db/models/blog')

module.exports = {
    getAll: async (limit) => {
        return await Blog.find().limit(limit)
    },
    get: async (blogId) => {
        return await Blog.findById(blogId)
    },
    create: async (blog) => {
        return await Blog.create(blog)
    },
    edit: async (blogId, blog) => {
        return await Blog.findByIdAndUpdate(blogId, blog)
    },
    remove: async (blogId) => {
        return await Blog.findByIdAndRemove(blogId)
    }
}