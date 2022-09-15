let productosDaos, carritosDaos

switch ('mongo') {
    case 'fs':
        const ProductosDaosFS = require('../daos/productos/ProductosDaosFS')
        const CarritoDaosFS = require('./carritos/CarritosDaosFS')

        productosDaos = new ProductosDaosFS()
        carritosDaos = new CarritoDaosFS
        break;

    case 'mongo':
        const ProductosDaosMongoDB = require('../daos/productos/ProductosDaosMongoDB')
        const CarritoDaosMongoDB = require('./carritos/CarritosDaosMongoDB')

        productosDaos = new ProductosDaosMongoDB()
        carritosDaos = new CarritoDaosMongoDB()
        break;

    case 'firebase':
        const ProductosDaosFirebase = require('../daos/productos/ProductosDaosFirebase')
        const CarritoDaosFirebase = require('../daos/carritos/CarritosDaosFirebase')

        productosDaos = new ProductosDaosFirebase()
        carritosDaos = new CarritoDaosFirebase()
        break;

    default:
        break;
}

module.exports = {
    productosDaos,
    carritosDaos
}