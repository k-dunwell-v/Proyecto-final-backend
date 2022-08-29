const express = require("express")
const app = express()
const { Server:HttpServer } = require("http")
const httpServer = new HttpServer(app)
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const PORT = process.env.PORT || 8080

const productsRouter = require("./routes/Products")
const cartRouter = require("./routes/Cart")

app.use("/api", productsRouter)
app.use("/api/carrito", cartRouter)

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(404).send('Something broke!');
});


httpServer.listen(PORT, err => {
    if (err) throw err
    console.log(`Server running on port ${PORT}`)
})

