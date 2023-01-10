const express = require("express")
const router = express.Router()

const passport = require('../libs/passport')

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/api/home')
    } else {
        res.render('index')
    }
    
})

router.post('/login', passport.authenticate('login',{
    successRedirect: '/api/home',
    failureRedirect: '/api/login'
}),(req, res) => { 
    res.redirect('/api/home')
})

router.get('/signup', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/api/home')
    } else {
        res.render('index', {user:'wip'})
    }
    
})

router.post('/signup', passport.authenticate('signup',{
    successRedirect: '/api/home',
    failureRedirect: '/api/signup'
}),(req, res) => {
    res.redirect('/api/home')

})

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err) }
        res.redirect('/api/login')
    })
})

module.exports = router