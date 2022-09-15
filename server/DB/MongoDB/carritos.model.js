const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(

    {    
        products: {
            type: Array,
            required: true
        }

    },

    { timestamps: true }
)

module.exports = mongoose.model('Carrito', CartSchema)