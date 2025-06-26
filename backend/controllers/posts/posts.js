const Post = require("../../model/schema/Post");

exports.getAllPosts=async(req,res)=>{

  console.log(req.query,'this is my query')
console.log('adfasdsdf')

const { filterText, searchText } = req.query;

const searchRegex = new RegExp(searchText, 'i'); // 'i' = case-insensitive

const searchConditions = searchText
  ? {
      $or: [
        { title: { $regex: searchRegex } },
        { content: { $regex: searchRegex } },
        { author: { $regex: searchRegex } },
      ],
    }
  : {};

const statusCondition =
  filterText && filterText !== 'All'
    ? { status: filterText }
    : {};

const query = {
  ...searchConditions,
  ...statusCondition,
};
    const data=await Post.find(query)
    console.log(data,'this is all products data ')
    res.status(200).json({
        success: true,
        message: 'File uploaded successfully!',
        data
      });
}
exports.addPosts=async(req,res)=>{

    const data=await Post.create({...req.body,image:`/uploads/${req.file.filename}`})
 res.status(200).json({
      success: true,
      message: 'File uploaded successfully!',
      data
    });

}
exports.deletePost=async(req,res)=>{

  console.log(req.params,'delete')
 try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted', post: deletedPost });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
exports.updatePost=(req,res)=>{}