const express = require("express")
const router = express.Router()
const fs = require("fs")


router.post("/", (req, res) => {

    const { products } = req.body

    const d = new Date()
    const date = `[${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`

    fs.readFile("./public/wheelies.json", "utf-8", (err, wheelies) => {
        
        if (err) {
            const cart = {"id": 1, "timestamp": date, "products": products}

            fs.writeFileSync("./public/wheelies.json", JSON.stringify([cart]))

            // res.redirect(req.get('referer'))

            res.json({success:true, cart:cart})


        }else{
            const dataParsed = JSON.parse(wheelies)
            const cart = {"id": dataParsed.length + 1, "timestamp": date, "products": products}
            dataParsed.push(cart)

            fs.writeFileSync("./public/wheelies.json", JSON.stringify(dataParsed))
            
            // res.redirect(req.get('referer'))

            res.json({success:true, cart:cart})
            

        }
    })
})

router.delete("/:id", (req, res) => {

    const { id } = req.params

    fs.readFile("./public/wheelies.json", "utf-8", (err, wheelies) => {
        
        if (err) {
            res.send(err)
        }else{

            const dataParsed = JSON.parse(wheelies)
            const getCart = dataParsed.findIndex((cart => cart["id"] === parseInt(id)))

            if (getCart > -1) {
                dataParsed.splice(getCart, 1)

                const newText = JSON.stringify(dataParsed)
                fs.writeFileSync("./public/wheelies.json", newText)

                res.json({success:true})

            }else{
                res.json({success:false, err:"ID no existe."})
            }
        }
    })

})

router.get("/:id/productos", (req, res) => {
    const { id } = req.params

    fs.readFile("./public/wheelies.json", "utf-8", (err, wheelies) => {
        
        if (err) {
            res.json(err)
        }else{
			const dataParsed = JSON.parse(wheelies)
			const getCart = dataParsed.findIndex((product => product["id"] === parseInt(id)))

			res.json(dataParsed[getCart].products)
        }
    })

})

router.post("/:id/productos", (req, res) => {
    const { id } = req.params
    const { product } = req.body

    const d = new Date()
    const date = `[${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`

    fs.readFile("./public/wheelies.json", "utf-8", (err, wheelies) => {
        
        if (err) {
            res.json(err)

        }else{
            const dataParsed = JSON.parse(wheelies)
            const getCart = dataParsed.findIndex((product => product["id"] === parseInt(id)))
            const cart = dataParsed[getCart]

            dataParsed[getCart].products.forEach(oldProduct => {

                if (oldProduct["id"] === product["id"]) {
                    
                    product["qty"] = oldProduct["qty"] + product["qty"]
                    const getProduct = cart["products"].findIndex((product => product["id"] === parseInt(oldProduct["id"])))
                    cart["products"].splice(getProduct, 1)
                }}
            
            )

            const updateProducts = dataParsed[getCart].products.concat(product)

            dataParsed[getCart].timestamp = date
            dataParsed[getCart].products = updateProducts

            fs.writeFileSync("./public/wheelies.json", JSON.stringify(dataParsed))
            
            // res.redirect(req.get('referer'))

            res.json({success:true, cart:dataParsed[getCart]})
            

        }
    })
})

router.delete("/:id/productos/:id_prod", (req, res) => {

    const { id, id_prod } = req.params

    fs.readFile("./public/wheelies.json", "utf-8", (err, wheelies) => {
        
        if (err) {
            res.json(err)
        }else{
			const dataParsed = JSON.parse(wheelies)
			const getCart = dataParsed.findIndex((cart => cart["id"] === parseInt(id)))
            const cart = dataParsed[getCart]
            const getProduct = cart["products"].findIndex((product => product["id"] === parseInt(id_prod)))

            if (getProduct > -1) {
                cart["products"].splice(getProduct, 1)

                const newText = JSON.stringify(dataParsed)
                fs.writeFileSync("./public/wheelies.json", newText)

                res.json({success:true, cart:cart})

            }else{
                res.json({success:false, err:"ID no existe."})
            }

			
        }
    })

})


module.exports = router