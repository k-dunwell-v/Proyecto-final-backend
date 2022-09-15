const ContenedorFirebase = require('../../contenedores/contenedorFirebase')

class CarritosDaosFirebase extends ContenedorFirebase {
    constructor() {
        super('carritos')
    }

    async addToCart(id, product) {

        try {
            const data = this.query.doc(id)
            const element = await data.get()
            const products = element.data().products

            products.forEach(oldProduct => {
                if (oldProduct["id"] === product.id) {
                    product.qty = oldProduct["qty"] + product.qty
                    const getProduct = products.findIndex((product => product["id"] === oldProduct["id"]))
                    products.splice(getProduct, 1)
                }
            })

            const updatedProducts = products.concat(product)

            await data.update({products:updatedProducts})
    
        } catch (error) {
            console.log(error); throw error
        }

    }

    async deleteFromCart(id, id_prod) {
        try {
            const data = this.query.doc(id)
            const element = await data.get()
            const products = element.data().products

            const getProduct = products.findIndex((product => product["id"] === id_prod))
            console.log(getProduct)

            if (getProduct > -1) {
                products.splice(getProduct, 1)
                await data.update({products:products})

                return {success:true, cart:products}
    
            }else{
                return {success:false, err:"ID no existe."}
            }
            
        } catch (error) {
            console.log(error); throw error
        }

    }

}

module.exports = CarritosDaosFirebase