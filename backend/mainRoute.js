const express=require('express')
const router=express.Router()

const posts=require('./controllers/posts/_route')
const userManagement=require('./controllers/userManagement/_route')

router.use('/posts',posts)

router.use('/userManagement',userManagement)


module.exports=router