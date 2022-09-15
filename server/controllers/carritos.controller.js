const { response } = require('express')
const { carritosDaos } = require('../daos/index')

const db = carritosDaos

const postCart = (req, res = response) => {

    const { product } = req.body

    const cart = {"products": [product]}

    db.add(cart).then((id) => {
        res.json({success:true, newID:id})
    }).catch((err) => {
        res.json({success:false, error:err})
    })

}

const deleteCart = (req, res = response) => {

    const { id } = req.params

    db.delete(id).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json({success:false, error:err})
    })

}

const getProducts = (req, res = response) => {
    const { id } = req.params

    db.get(id).then((cart) => {
        res.json(cart.products)
    }).catch((err) => {
        res.json({success:false, error:err})
    })

}

const postProducts = (req, res = response) => {
    const { id } = req.params
    const { product } = req.body

    db.addToCart(id, product).then(() => {
        res.json({success:true})
    }).catch((err) => {
        console.log(err)
        res.json({success:false, error:err})
    })

    
}

const deleteProducts = (req, res = response) => {

    const { id, id_prod } = req.params

    db.deleteFromCart(id, id_prod).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json({success:false, error:err})
    })

}


module.exports = {
    postCart,
    deleteCart,
    getProducts,
    postProducts,
    deleteProducts
}