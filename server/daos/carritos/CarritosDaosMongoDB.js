const ContenedorMongoDB = require('../../contenedores/contenedorMongoDB')

class CarritosDaosMongoDB extends ContenedorMongoDB {
    constructor() {
        super('../DB/mongoDB/carritos.model')
    }

    async addToCart(id, product) {

        try {
            const data = await this.db.updateOne({_id: id, 'products._id': { $eq: product['_id']}}, {$inc: {'products.$.qty': 1}})
        
            if (!data.modifiedCount) {
                await this.db.updateOne({_id: id}, {$push: {'products': product}})
            }
    
        } catch (error) {
            console.log(error); throw error
        }

    }

    async deleteFromCart(id, id_prod) {
        return this.db.updateOne({_id: id}, { $pull: {products: { _id: id_prod}}})
    }

}

module.exports = CarritosDaosMongoDB