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
        const b = await Blog.create(blog)
        return { success: true, ...b._doc }
    },
    edit: async (userToken, blogId, blog) => {
        const user = await User.findOne({ userToken })
        if (!user) return { success: false }
        const b = await Blog.findByIdAndUpdate(blogId, blog)
        return { success: true, ...b._doc }
    },
    remove: async (blogId) => {
        return await Blog.findByIdAndRemove(blogId).then(async (blog) => {
            return await User.findById(blog.userId)
        })
    }
}