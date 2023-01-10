const express = require("express")
const app = express()
const { Server:HttpServer } = require("http")
const httpServer = new HttpServer(app)
const cors = require("cors")

const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoStore = require('connect-mongo')
require('dotenv').config()
const compression = require('compression')

app.set("view engine", "pug")
app.set("views", "./src/views")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(cors());
app.use(compression())

app.use(cookieParser(process.env.COOKIES_SECRET))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: { maxAge: 600000 },
    store: mongoStore.create({mongoUrl: process.env.MONGO_URL, mongoOptions:{useNewUrlParser:true, useUnifiedTopology: true}})

}))


//////////////////////////////////////////////////////
////////////////////// PASSPORT //////////////////////
//////////////////////////////////////////////////////

const passport = require('./libs/passport')

app.use(passport.initialize())
app.use(passport.session())

const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }else{
        res.redirect('/api/login')
    }
}



//////////////////////////////////////////////////////
///////////////// LOGGERS & ROUTERS //////////////////
//////////////////////////////////////////////////////

const { logger, getDate } = require('./logs/logger')

app.use((req, res, next) => {
    const { method, url } = req.socket['parser'].incoming
    logger.info(`${getDate()} ${method} ${url}`) 
    next()
})

const PassportRouter = require("./routes/Passport.route")
const productsRouter = require("./routes/Productos.route")
const cartRouter = require("./routes/Carrito.route")

app.use("/api/", PassportRouter)
app.use("/api/", checkAuth, productsRouter)
app.use("/api/carritos", checkAuth, cartRouter)

app.use((req, res) => {
    const { url, method } = req.socket['parser'].incoming
    logger.warn(`Ruta ${url} con método ${method} no implementada`)
    res.status(404).send(`Ruta ${url} con método ${method} no implementada`)
})

module.exports = {
    app,
    httpServer
}