const express=require('express')
const { addPosts, deletePost, updatePost, getAllPosts } = require('./posts')
const upload = require('../../middlewares/multerConfig')
const router=express.Router()

router.post('/addPost',upload.single('img'),addPosts)
// router.delete('/deletePost/:id',deletePost)
// router.patch('/updatePost/:id',updatePost)
router.get('/allPosts',getAllPosts)


module.exports=router