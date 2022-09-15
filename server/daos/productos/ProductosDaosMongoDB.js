const ContenedorMongoDB = require('../../contenedores/contenedorMongoDB')

class ProductosDaosMongoDB extends ContenedorMongoDB {
    constructor() {
        super('../DB/mongoDB/productos.model')
    }
}

module.exports = ProductosDaosMongoDB