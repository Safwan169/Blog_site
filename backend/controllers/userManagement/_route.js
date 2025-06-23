const express=require('express')
const { googleAuth, googleRedirect } = require('./userManagement');
const passport = require('passport');
const router=express.Router()



// for googel authentation
router.get('/googleAuth',googleAuth)
router.get('/googleAuth/callback', passport.authenticate('google', { session: false }),
googleRedirect);


module.exports=router