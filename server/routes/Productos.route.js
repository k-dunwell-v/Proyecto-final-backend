const express = require("express")
const router = express.Router()

const { getProducts, postProduct, putProduct, deleteProduct } = require('../controllers/productos.controller')

router.get("/", getProducts)

router.get("/:id", getProducts)

//ADMIN REQ
const admin = true

function isAdmin(req, res, next) {
    if (admin) {
        next()
    } else {
    res.json({"err":"admin required"})
    }
}

router.post("/", isAdmin, postProduct)

router.put("/:id", isAdmin, putProduct)

router.delete("/:id", isAdmin, deleteProduct)

module.exports = router