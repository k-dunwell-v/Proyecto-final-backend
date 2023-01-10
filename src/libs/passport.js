const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

/////////// utils /////////

const { logger, getDate } = require('../logs/logger')

const userModel = require('../models/usuarios.model')

const isValidePassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}

const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
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
    
    const transporter = require('./mailer')
    
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

module.exports = passport