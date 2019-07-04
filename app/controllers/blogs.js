const Blog = require('./../db/models/blog')
const User = require('./../db/models/user')

module.exports = {
    getAll: async (blogCode, limit) => {
        const user = await User.findOne({ blogCode })
        if (!user) return { success: false }
        return await Blog.find({ userId: user._id }, { userId: 0 }).limit(limit)
    },
    get: async (blogId) => {
        return await Blog.findById(blogId)
    },
    create: async (userToken, blog) => {
        const user = await User.findOne({ userToken })
        if (!user) return { success: false }
        blog['userId'] = user._id
        await Blog.create(blog)
        return { success: true }
    },
    edit: async (userToken, blogId, blog) => {
        const user = await User.findOne({ userToken })
        if (!user) return { success: false }
        await Blog.findByIdAndUpdate(blogId, blog)
        return { success: true }
    },
    remove: async (blogId) => {
        return await Blog.findByIdAndRemove(blogId)
    }
}