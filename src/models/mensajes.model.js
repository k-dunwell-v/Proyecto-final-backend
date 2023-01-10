const mongoose = require('mongoose')

const MsgSchema = new mongoose.Schema(

    {
        email: {
            type: String,
            required: true
        },

        date: {
            type: String,
            required: true
        },

        message:{
            type: String,
            required: true
        }

    }
)

module.exports = mongoose.model('mensajes', MsgSchema)