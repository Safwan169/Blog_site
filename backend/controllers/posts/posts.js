const Post = require("../../model/schema/Post");

exports.getAllPosts=async(req,res)=>{
console.log('adfasdsdf')
    const data=await Post.find()
    console.log(data,'this is all products data ')
    res.status(200).json({
        success: true,
        message: 'File uploaded successfully!',
        data
      });
}
exports.addPosts=async(req,res)=>{

    const data=await Post.create({...req.body,author:req.body.userEmail,image:`/uploads/${req.file.filename}`})
 res.status(200).json({
      success: true,
      message: 'File uploaded successfully!',
      data
    });

}
exports.deletePost=(req,res)=>{}
exports.updatePost=(req,res)=>{}