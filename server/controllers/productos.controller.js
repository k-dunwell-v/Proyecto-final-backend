const { response } = require('express')
const { productosDaos } = require('../daos/index')

const db = productosDaos

const getProducts = async (req, res = response) => {
    const { id } = req.params

    db.get(id).then((products) => {
        res.json(products)
    }).catch((err) => {
        res.json({success:false, error:err})
    })
}

const postProduct = async (req, res = response) => {

    const {title, price, thumbnail, detail, stock } = req.body

    const product = {
        title:
        title,
        price:
        price,
        thumbnail:
        thumbnail,
        detail:
        detail,
        stock:
        stock
    }

    db.add(product).then((id) => {
        res.json({success:true, newID:id})
    }).catch((err) => {
        res.json({success:false, error:err})
    })
}

const putProduct = async (req, res = response) => {

    const { id } = req.params
    const {title, price, thumbnail, detail, stock } = req.body

    const product = {title: title, price: price, thumbnail: thumbnail, detail: detail, stock: stock}

    db.update(id, product).then(() => {
        res.json({success:true})
    }).catch((err) => {
        res.json({success:false, error:err})
    })
}

const deleteProduct = async (req, res = response) => {
    const { id } = req.params

    db.delete(id).then((result) => {
        res.json({success: true, log: result})
    }).catch((err) => {
        console.log(err)
        res.json({success:false, error:err})
    })
}

module.exports = {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct
}