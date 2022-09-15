const ContenedorFS = require('../../contenedores/contenedorFS')

class ProductosDaosFS extends ContenedorFS {
    constructor() {
        super('./DB/FS/productos.json')
    }
}

module.exports = ProductosDaosFS