const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(

    {    
        username: {
            type: String,
            trim: true,
            required: true
        },

        password: {
            type: String,
            trim: true,
            required: true
        },

        name: {
            type: String,
            trim: true,
            required: true
        },

        address: {
            type: String,
            trim: true,
            required: true
        },

        age: {
            type: Number,
            trim: true,
            required: true
        },

        phone: {
            type: String,
            trim: true,
            required: true
        },

        pfp: {
            type: String,
            trim: true,
            required: false
        }

    }

)

module.exports = mongoose.model('usuarios', userSchema)