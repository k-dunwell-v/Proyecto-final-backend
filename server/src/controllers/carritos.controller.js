const { response } = require('express')
const CarritosDaos = require('../daos/CarritosDaosMongoDB')
const { logger } = require('../logs/logger')

const db = new CarritosDaos()

const postCart = (req, res = response) => {

    const { id } = req.user
    const product = req.body
    product['qty'] = 1

    const cart = {'_id': id, 'products': [product]}

    db.add(cart).then((id) => {
        res.json({success:true, newID:id})
    }).catch((err) => {
        logger.error(err)
        if (err.code === 11000) {
            res.json({dupe:true})
        }else{
            res.json({success:false, error:err})
        }
        
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
    const product = req.body

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