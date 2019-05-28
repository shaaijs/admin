const User = require('./../db/models/user')

module.exports = {
    getAll: async (limit) => {
        return await User.find().limit(limit)
    },
    login: async (userId) => {
        return await User.findById(userId)
    },
    signUp: async (user) => {
        return await User.create(user)
    },
    edit: async (userId, user) => {
        return await User.findByIdAndUpdate(userId, user)
    },
    remove: async (userId) => {
        return await User.findByIdAndRemove(userId)
    }
}