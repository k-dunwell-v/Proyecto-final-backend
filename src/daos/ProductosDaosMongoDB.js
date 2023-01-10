const ContenedorMongoDB = require('../models/contenedorMongoDB')

class ProductosDaosMongoDB extends ContenedorMongoDB {
    constructor() {
        super('../models/productos.model.js')
    }
}

module.exports = ProductosDaosMongoDB