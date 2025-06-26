import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react'; // Assuming you're using lucide-react icons
import { useDispatch } from 'react-redux';
import { updateFilteText, updateSearchText } from '../../redux/features/post/postSlice';

export const AddPost_filter = ({handleAddPost}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const dispatch=useDispatch()
  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setFilterStatus(selectedValue)
    dispatch(updateFilteText(selectedValue));
    console.log('Selected status:', selectedValue);
  };


  const handlePost = () => {

    handleAddPost()
    console.log('Add Post Clicked');
  };

  const handleSearchText=(e)=>{
    setSearchTerm(e.target.value)
    dispatch(updateSearchText(e.target.value))

    console.log(e.target.value,'this is seaarch text ')
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 backdrop-blur-sm mb-6 sm:mb-8 p-4 sm:p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={handlePost}
          className="inline-flex items-center justify-center gap-2 min-w-52 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
        >
          <Plus size={18} className="sm:w-5 sm:h-5" />
          Add New Post
        </button>

        <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4">
          <div className="relative w-auto flex-1">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={handleSearchText}
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
            />
          </div>

          <div className="relative sm:w-auto">
            <Filter className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              value={filterStatus}
              onChange={handleFilter}
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
  );
};
