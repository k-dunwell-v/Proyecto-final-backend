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
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('../public'))
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


///////////////////////////////////////////////////////////
///////////////////////// PASSPORT ////////////////////////
///////////////////////////////////////////////////////////

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

app.use(passport.initialize())
app.use(passport.session())

/////////// utils /////////

const userModel = require('./models/usuarios.model')

const isValidePassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}

const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }else{
        res.redirect('/api/login')
    }

}
////////// PASSPORT  midelware //////////

passport.use('login', new LocalStrategy(
    async ( username, password, done )=>{
        let user = await userModel.findOne({username: username})

        if (!user) {
            return done(null, false, { message: 'User not found' })
        }
            
        if (!isValidePassword(user, password)) {
            logger.warn(`${getDate()} Intento inicio de sesión fallido, contraseña errada para usuario ${username}`) 
            return done(null, false, { message: 'Password incorrect' })
        }

        logger.info(`${getDate()} ${username} ha iniciado sesión.`) 
        
        done(null, user)
    }
))

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
}, async (req, username, password, done) => {
    let user = await userModel.findOne({username: username})

    if (user) {
        logger.warn(`${getDate()} Intento de creación de usuario fallido, ${username} ya está registrado.`)
        return done(null, false, { message: 'User already exists' })
    }

    const newUser = new userModel({
        username: username,
        password: createHash(password),
        name: req.body['name'],
        address: req.body['address'],
        age: req.body['age'],
        phone: req.body['phone'],
        pfp: req.body['pfp']
    })

    await newUser.save()
    
    const transporter = require('./libs/mailer')
    
    try {
        const info = await transporter.sendMail({
            from: 'eCommerce',
            to: 'judah.ruecker@ethereal.email',
            subject: 'Nuevo registro!',
            html: JSON.stringify(newUser)
        })
        logger.info(`${getDate()} Nuevo usuario registrado, correo enviado a administrador: ${info}`)
    } catch (error) {
        logger.error(error)
    }

    return done(null, req.body)

}))
//////////////////   passport serialize   ///////


passport.serializeUser( (user, cb) => {
    process.nextTick(() => {
      return cb(null, {
        id: user['_id'],
        username: user.username,
        name: user.name,
        address: user.address,
        age: user.age,
        phone: user.phone,
        pfp: user.pfp
      });
    });
  });

passport.deserializeUser( (user, cb) => {
    process.nextTick(() => {
      return cb(null, user);
    });
  });

/////////////////////////////////////////////////

app.get('/api/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/api/home')
    } else {
        res.render('index')
    }
    
})

app.post('/api/login', passport.authenticate('login',{
    successRedirect: '/api/home',
    failureRedirect: '/api/login'
}),(req, res) => { 
    res.redirect('/api/home')
})

app.get('/api/signup', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/api/home')
    } else {
        res.render('index', {user:'wip'})
    }
    
})

app.post('/api/signup', passport.authenticate('signup',{
    successRedirect: '/api/home',
    failureRedirect: '/api/signup'
}),(req, res) => {
    res.redirect('/api/home')

})

app.get('/api/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err) }
        res.redirect('/api/login')
    })
})


//////////////////////////////////////////////////////
///////////////// LOGGERS & ROUTERS //////////////////
//////////////////////////////////////////////////////

const { logger, getDate } = require('./logs/logger')

app.use((req, res, next) => {
    const { method, url } = req.socket['parser'].incoming
    logger.info(`${getDate()} ${method} ${url}`) 
    next()
})

const productsRouter = require("./routes/Productos.route")
const cartRouter = require("./routes/Carrito.route")

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