const mongoose = require('mongoose')
const blogSchema = require('./schemas/blog')

blogSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next()
    this.password = Bycrypt.hashSync(this.password, 10)
    next()
})

blogSchema.methods.comparePassword = function (plainText, cb) {
    return cb(null, Bycrypt.compareSync(plainText, this.password))
}

module.exports = mongoose.model('Blog', blogSchema)

