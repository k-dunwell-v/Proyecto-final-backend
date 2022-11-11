const express = require("express")
const router = express.Router()

const { postCart, deleteCart, getProducts, postProducts, deleteProducts } = require('../controllers/carritos.controller.js')

router.post("/", postCart)

router.delete("/:id", deleteCart)

router.get("/:id/productos", getProducts)

router.post("/:id/productos", postProducts)

router.delete("/:id/productos/:id_prod", deleteProducts)


module.exports = router