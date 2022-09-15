const express = require("express")
const app = express()
const { Server:HttpServer } = require("http")
const httpServer = new HttpServer(app)
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const PORT = process.env.PORT || 8080

const productsRouter = require("./routes/Productos.route")
const cartRouter = require("./routes/Carrito.route")

app.use("/api/productos", productsRouter)
app.use("/api/carritos", cartRouter)

app.use(function(req, res, next){
    res.status(404);
    res.send("...huh?");
})

httpServer.listen(PORT, err => {
    if (err) throw err
    console.log(`Server running on port ${PORT}`)
})

