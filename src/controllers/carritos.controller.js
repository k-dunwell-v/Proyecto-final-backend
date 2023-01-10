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
        if (err.code === 11000) {
            res.json({dupe:true})
        }else{
            logger.error(err)
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
        logger.error(err)
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

const sendCart = async (req, res = response) => {

    const { id } = req.params

    db.get(id).then((cart) => {

        // Mail to admin
        const transporter = require('../libs/mailer')
        transporter.sendMail({
            from: 'eCommerce',
            to: 'judah.ruecker@ethereal.email',
            subject: `Nuevo pedido de ${req.user['username']}`,
            html: JSON.stringify(cart)
        }).then((info) =>{
            logger.info(`Nuevo pedido de ${req.user['id']}, ${info}`)
        }).catch((err) => {
            res.json({success:false, error:err})
        })

        // WSP to admin
        const accountSid = process.env.TWILIO_ACCOUNT_SID; 
        const authToken = process.env.TWILIO_AUTH_TOKEN; 
        const client = require('twilio')(accountSid, authToken); 
 
        client.messages 
        .create({ 
            body: `Nuevo pedido de ${req.user['name']}, ${req.user['username']}`, 
            from: 'whatsapp:+14155238886',       
            to: 'whatsapp:+573008038505' 
        }) 
        .then(message => logger.info(message.sid)) 
        .done();
        
        // MSG to customer
        client.messages 
        .create({ 
            body: 'Tu pedido ha sido recibido y se encuentra en proceso!',  
            messagingServiceSid: 'MG875d38ec95c36b48da68589dbdb90d13',      
            to: `${req.user['phone']}`
        }) 
        .then(message => logger.info(message.sid)) 
        .done();

        res.json({success:true, message:'order submitted'})

    }).catch((err) => {
        res.json({success:false, error:err})
    })



}


module.exports = {
    postCart,
    deleteCart,
    getProducts,
    postProducts,
    deleteProducts,
    sendCart
}