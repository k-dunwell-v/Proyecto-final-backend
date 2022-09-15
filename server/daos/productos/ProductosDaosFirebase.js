const ContenedorFirebase = require('../../contenedores/contenedorFirebase')

class ProductosDaosFirebase extends ContenedorFirebase {
    constructor() {
        super('productos')
    }
}

module.exports = ProductosDaosFirebase