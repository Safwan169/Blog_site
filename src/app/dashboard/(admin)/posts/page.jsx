'use client';
import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, MoreVertical, Calendar, User, Tag, TrendingUp } from 'lucide-react';
import AddPostForm from '@/components/admin/AddPostForm';
import { useAddPostsMutation, useGetPostQuery } from '@/redux/api/postApi';

export default function AdminPostsTable() {
  const [showModal, setShowModal] = useState(false);

  const [postData]=useAddPostsMutation()
  const { data} = useGetPostQuery();// for all post 
  console.log("dataaa", data?.data)
  const handleSubmitPost = async (data) => {
const { title, slug,img, content, catSlug, userEmail } = data;
console.log(data,'fadsf')
const formData = new FormData()

    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('content', content);
    formData.append('img', img);
    formData.append('catSlug', catSlug);
    formData.append('userEmail', userEmail);

   const res= await postData(formData).unwrap()
   console.log(res,'this is the response')
 
};
const [posts, setPosts] = useState([
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: "John Doe",
    category: "Tutorial",
    status: "Published",
    date: "2024-01-15",
    views: 1250,
    featured: true
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    author: "Jane Smith",
    category: "Development",
    status: "Draft",
    date: "2024-01-14",
    views: 890,
    featured: false
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    author: "Mike Johnson",
    category: "Design",
    status: "Published",
    date: "2024-01-13",
    views: 2100,
    featured: true
  },
  {
    id: 4,
    title: "Database Optimization Tips",
    author: "Sarah Wilson",
    category: "Backend",
    status: "Scheduled",
    date: "2024-01-16",
    views: 0,
    featured: false
  },
  {
    id: 5,
    title: "Mobile App Development Guide",
    author: "Alex Brown",
    category: "Mobile",
    status: "Published",
    date: "2024-01-12",
    views: 1680,
    featured: false
  }
]);

// useEffect(()=>{
// setPosts(data)
// },[data] )


  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts?.filter(post => post.id !== id));
    }
  };

  const handleView = (id) => {
    alert(`Viewing post with ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Editing post with ID: ${id}`);
  };

  const handleAddPost = () => {

setShowModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 border-green-200';
      case 'Draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredPosts = posts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  
  return (
  <>
    <AddPostForm isOpen={showModal}
      onClose={() => setShowModal(false)}
      onSubmit={handleSubmitPost}/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 md:p-3 p-0 lg:p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 backdrop-blur-sm mb-6 sm:mb-8  sm:p-0 lg:px-8 lg:py-5">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="text-center flex flex-col md:flex-row md:gap-5 py-2 md:py-0 md:items-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Posts Management
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Manage your blog posts with ease</p>
            </div>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 backdrop-blur-sm mb-6 sm:mb-8 p-4 sm:p-0 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl shadow-lg border border-blue-200/50 p-3 sm:p-4 lg:p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {posts?.length}
              </div>
              <div className="text-gray-600 mt-1 text-xs sm:text-sm">Total Posts</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl shadow-lg border border-green-200/50 p-3 sm:p-4 lg:p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {posts?.filter(p => p.status === 'Published').length}
              </div>
              <div className="text-gray-600 mt-1 text-xs sm:text-sm">Published</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl shadow-lg border border-yellow-200/50 p-3 sm:p-4 lg:p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                {posts?.filter(p => p.status === 'Draft').length}
              </div>
              <div className="text-gray-600 mt-1 text-xs sm:text-sm">Drafts</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl shadow-lg border border-purple-200/50 p-3 sm:p-4 lg:p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {posts?.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
              </div>
              <div className="text-gray-600 mt-1 text-xs sm:text-sm">Total Views</div>
            </div>
          </div>
        </div>

        {/* Controls Section - Add Post, Search and Filter */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 backdrop-blur-sm mb-6 sm:mb-8 p-4 sm:p-6">
          <div className="flex flex-col md:flex-row   gap-4">
            <button
              onClick={handleAddPost}
              className="inline-flex items-center justify-center gap-2 min-w-52 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              <Plus size={18} className="sm:w-5 sm:h-5" />
              Add New Post
            </button>
            
            <div className="flex flex-col  w-full sm:flex-row gap-3 sm:gap-4">
              <div className="relative w-auto flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              
              <div className="relative sm:w-auto">
                <Filter className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full sm:w-auto pl-10 sm:pl-12 pr-8 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none bg-white text-sm sm:text-base"
                >
                  <option value="All">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Scheduled">Scheduled</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table Section */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-xl border border-gray-200/50 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <tr>
                  <th className="text-left p-6 font-semibold text-gray-700">Post Details</th>
                  <th className="text-left p-6 font-semibold text-gray-700">Author</th>
                  <th className="text-left p-6 font-semibold text-gray-700">Category</th>
                  <th className="text-left p-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left p-6 font-semibold text-gray-700">Views</th>
                  <th className="text-left p-6 font-semibold text-gray-700">Date</th>
                  <th className="text-center p-6 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts?.map((post, index) => (
                  <tr 
                    key={post.id} 
                    className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        {post.featured && (
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                        )}
                        <div>
                          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          {post.featured && (
                            <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full mt-1 inline-block">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-gray-700">{post.author}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="p-6">
                      <span className="text-gray-700 font-medium">{post.views.toLocaleString()}</span>
                    </td>
                    <td className="p-6">
                      <span className="text-gray-600">{post.date}</span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleView(post.id)}
                          className="p-2 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 transition-all duration-200 hover:scale-110"
                          title="View Post"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEdit(post.id)}
                          className="p-2 rounded-xl bg-green-100 hover:bg-green-200 text-green-700 transition-all duration-200 hover:scale-110"
                          title="Edit Post"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-700 transition-all duration-200 hover:scale-110"
                          title="Delete Post"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {filteredPosts?.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-4 sm:p-5">
              {/* Post Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {post.featured && (
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex-shrink-0"></div>
                    )}
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {post.title}
                    </h3>
                  </div>
                  {post.featured && (
                    <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 ml-2 ${getStatusColor(post.status)}`}>
                  {post.status}
                </span>
              </div>

              {/* Post Details */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-gray-400 flex-shrink-0" />
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-gray-700 truncate">{post.author}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{post.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{post.date}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => handleView(post.id)}
                  className="p-2 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 transition-all duration-200"
                  title="View Post"
                >
                  <Eye size={16} />
                </button>
                <button
                  onClick={() => handleEdit(post.id)}
                  className="p-2 rounded-xl bg-green-100 hover:bg-green-200 text-green-700 transition-all duration-200"
                  title="Edit Post"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-700 transition-all duration-200"
                  title="Delete Post"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts?.length === 0 && (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-8 sm:p-12 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No posts found</h3>
            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
      </>

  );
}