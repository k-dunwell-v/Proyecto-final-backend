const ContenedorFS = require('../../contenedores/contenedorFS')
const fs = require("fs")

class CarritosDaosFS extends ContenedorFS {
    constructor() {
        super('./DB/FS/wheelies.json')
    }

    async addToCart(id, product) {

        fs.readFile(this.file, "utf-8", (err, wheelies) => {
            const dataParsed = JSON.parse(wheelies)
            const getCart = dataParsed.findIndex((product => product["id"] === parseInt(id)))
            const cart = dataParsed[getCart]
    
            dataParsed[getCart].products.forEach(oldProduct => {
    
                if (oldProduct["id"] === product.id) {
                    product.qty = oldProduct["qty"] + product.qty
                    const getProduct = cart["products"].findIndex((product => product["id"] === parseInt(oldProduct["id"])))
                    cart["products"].splice(getProduct, 1)
                }

            })
            
            const updateProducts = dataParsed[getCart].products.concat(product)
    
            dataParsed[getCart].products = updateProducts
    
            fs.writeFileSync(this.file, JSON.stringify(dataParsed))
        })
    }

    async deleteFromCart(id, id_prod) {
        const wheelies = await fs.readFileSync(this.file, "utf-8")
        const dataParsed = JSON.parse(wheelies)
        const getCart = dataParsed.findIndex((cart => cart["id"] === parseInt(id)))
        const cart = dataParsed[getCart]
        const getProduct = cart["products"].findIndex((product => product["id"] === parseInt(id_prod)))

        if (getProduct > -1) {
            cart["products"].splice(getProduct, 1)

            const newText = JSON.stringify(dataParsed)
            fs.writeFileSync(this.file, newText)

            return {success:true, cart:cart}

        }else{
            return {success:false, err:"ID no existe."}
        }
    
    }
}

module.exports = CarritosDaosFS