const express = require("express")
const router = express.Router()

const { postCart, deleteCart, getProducts, postProducts, deleteProducts, sendCart } = require('../controllers/carritos.controller.js')

//Crear carrito con 1 producto
router.post("/", postCart)

//Eliminar 1 carrito
router.delete("/:id", deleteCart)

//Ver 1 carrito
router.get("/:id/productos", getProducts)

//Añadir 1 producto a 1 carrito
router.post("/:id/productos", postProducts)

//Eliminar 1 ID de producto(s) de 1 carrito
router.delete("/:id/productos/:id_prod", deleteProducts)

//Enviar pedido/carrito
router.get('/:id', sendCart)


module.exports = router