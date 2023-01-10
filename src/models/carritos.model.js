const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(

    {    
        _id: {
            type: String,
            required: true
        },

        products: {
            type: Array,
            required: true
        }

    },

    { timestamps: true }
)

module.exports = mongoose.model('carritos', CartSchema)