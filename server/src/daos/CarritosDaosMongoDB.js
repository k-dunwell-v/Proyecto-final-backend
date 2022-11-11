const { logger } = require('../logs/logger')
const ContenedorMongoDB = require('../models/contenedorMongoDB')

class CarritosDaosMongoDB extends ContenedorMongoDB {
    constructor() {
        super('../models/carritos.model.js')
    }

    async addToCart(id, product) {

        try {
            const data = await this.db.updateOne({_id: id, 'products._id': { $eq: product['_id']}}, {$inc: {'products.$.qty': 1}})
        
            if (data.modifiedCount === 0) {
                product['qty'] = 1
                await this.db.updateOne({_id: id}, {$push: {'products': product}})
            }
    
        } catch (error) {
            logger.error(err); throw error
        }

    }

    async deleteFromCart(id, id_prod) {
        return this.db.updateOne({_id: id}, { $pull: {products: { _id: id_prod}}})
    }

}

module.exports = CarritosDaosMongoDB