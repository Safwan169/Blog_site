// 'use client'
// import React, { useState } from 'react';
// import { X, Upload, Plus } from 'lucide-react';

// export default function AddPostForm({ isOpen, onClose, onSubmit }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     slug: '',
//     content: '',
//     img: '',
//     catSlug: '',
//     userEmail: ''
//   });
//   const [imagePreview, setImagePreview] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showNewCategory, setShowNewCategory] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Auto-generate slug from title
//     if (name === 'title') {
//       const slug = value
//         .toLowerCase()
//         .replace(/[^a-z0-9 -]/g, '')
//         .replace(/\s+/g, '-')
//         .replace(/-+/g, '-');
//       setFormData(prev => ({
//         ...prev,
//         slug: slug
//       }));
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const value = e.target.value;
//     if (value === 'new') {
//       setShowNewCategory(true);
//       setFormData(prev => ({ ...prev, catSlug: '' }));
//     } else {
//       setShowNewCategory(false);
//       setNewCategoryName('');
//       setFormData(prev => ({ ...prev, catSlug: value }));
//     }
//   };

//   const handleNewCategoryChange = (e) => {
//     const value = e.target.value;
//     setNewCategoryName(value);
    
//     // Auto-generate slug from category name
//     const categorySlug = value
//       .toLowerCase()
//       .replace(/[^a-z0-9 -]/g, '')
//       .replace(/\s+/g, '-')
//       .replace(/-+/g, '-');
    
//     setFormData(prev => ({
//       ...prev,
//       catSlug: categorySlug
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target.result);
//         setFormData(prev => ({
//           ...prev,
//           img: file
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImagePreview('');
//     setFormData(prev => ({ ...prev, img: '' }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       await onSubmit(formData);
//       handleClose();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClose = () => {
//     setFormData({
//       title: '',
//       slug: '',
//       content: '',
//       img: '',
//       catSlug: '',
//       userEmail: ''
//     });
//     setImagePreview('');
//     setIsSubmitting(false);
//     setShowNewCategory(false);
//     setNewCategoryName('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
//       <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
//         {/* Modal Header */}
//         <div className="sticky top-0 bg-white/95 backdrop-blur-sm rounded-t-3xl border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Create New Post
//             </h2>
//             <p className="text-gray-600 mt-1 text-sm sm:text-base">Fill in the details to create a new blog post</p>
//           </div>
//           <button
//             onClick={handleClose}
//             className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200 hover:scale-110 active:scale-95"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
//           <div className="p-4 sm:p-6 space-y-6">
//             {/* Title */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Post Title *
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Enter your post title..."
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400"
//                 required
//               />
//             </div>

//             {/* Slug */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 URL Slug *
//               </label>
//               <input
//                 type="text"
//                 name="slug"
//                 value={formData.slug}
//                 onChange={handleInputChange}
//                 placeholder="post-url-slug"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 font-mono text-sm placeholder-gray-400"
//                 required
//               />
//               <p className="text-xs text-gray-500 mt-1">Auto-generated from title, but you can customize it</p>
//             </div>

//             {/* content */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Content *
//               </label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleInputChange}
//                 placeholder="Write a compelling content for your post..."
//                 rows={4}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 resize-none placeholder-gray-400"
//                 required
//               />
//               <div className="text-xs text-gray-500 mt-1 text-right">
//                 {formData.content.length} characters
//               </div>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Featured Image
//               </label>
//               <div className="space-y-4">
//                 {imagePreview ? (
//                   <div className="relative group">
//                     <img
//                       src={imagePreview}
//                       alt="Preview"
//                       className="w-full h-48 object-cover rounded-xl border border-gray-200"
//                     />
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
//                       <button
//                         type="button"
//                         onClick={handleRemoveImage}
//                         className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors transform hover:scale-110"
//                       >
//                         <X size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group">
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
//                         <Upload className="w-6 h-6 text-white" />
//                       </div>
//                       <p className="mb-2 text-sm text-gray-600">
//                         <span className="font-semibold">Click to upload</span> or drag and drop
//                       </p>
//                       <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                     </div>
//                     <input
//                       type="file"
//                       className="hidden"
//                       accept="image/*"
//                       onChange={handleImageChange}
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Category *
//               </label>
//               <select
//                 name="catSlug"
//                 value={showNewCategory ? 'new' : formData.catSlug}
//                 onChange={handleCategoryChange}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 appearance-none bg-white"
//                 required={!showNewCategory}
//               >
//                 <option value="">Select a category</option>
//                 <option value="tutorial">📚 Tutorial</option>
//                 <option value="development">💻 Development</option>
//                 <option value="design">🎨 Design</option>
//                 <option value="backend">⚙️ Backend</option>
//                 <option value="mobile">📱 Mobile</option>
//                 <option value="frontend">🖥️ Frontend</option>
//                 <option value="devops">🚀 DevOps</option>
//                 <option value="ai-ml">🤖 AI/ML</option>
//                 <option value="web3">🌐 Web3</option>
//                 <option value="new" className="text-blue-600 font-semibold">➕ New Category</option>
//               </select>
              
//               {/* New Category Input */}
//               {showNewCategory && (
//                 <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 animate-in slide-in-from-top-2 duration-300">
//                   <div className="flex items-center gap-2 mb-3">
//                     <Plus size={16} className="text-blue-600" />
//                     <span className="text-sm font-semibold text-blue-700">Create New Category</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={newCategoryName}
//                     onChange={handleNewCategoryChange}
//                     placeholder="Enter new category name..."
//                     className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
//                     required
//                   />
//                   <div className="flex items-center justify-between mt-2">
//                     <p className="text-xs text-gray-600">
//                       Slug: <span className="font-mono text-blue-600">{formData.catSlug || 'auto-generated'}</span>
//                     </p>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setShowNewCategory(false);
//                         setNewCategoryName('');
//                         setFormData(prev => ({ ...prev, catSlug: '' }));
//                       }}
//                       className="text-xs text-gray-500 hover:text-red-500 transition-colors"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Author Email */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Author Email *
//               </label>
//               <input
//                 type="email"
//                 name="userEmail"
//                 value={formData.userEmail}
//                 onChange={handleInputChange}
//                 placeholder="author@example.com"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400"
//                 required
//               />
//             </div>

//             {/* Form Actions */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
//               <button
//                 type="button"
//                 onClick={handleClose}
//                 disabled={isSubmitting}
//                 className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 {isSubmitting ? (
//                   <div className="flex items-center justify-center gap-2">
//                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                     Creating...
//                   </div>
//                 ) : (
//                   'Create Post'
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'
import React, { useState, useRef } from 'react';
import { X, Upload, Plus, Bold, Italic, Link, Palette } from 'lucide-react';

export default function AddPostForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    img: '',
    catSlug: '',
    userEmail: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  
  const contentRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      setFormData(prev => ({
        ...prev,
        slug: slug
      }));
    }
  };

  const handleContentChange = () => {
    if (contentRef.current) {
      setFormData(prev => ({
        ...prev,
        content: contentRef.current.innerHTML
      }));
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    contentRef.current.focus();
    handleContentChange();
  };

  const handleBold = () => {
    execCommand('bold');
  };

  const handleItalic = () => {
    execCommand('italic');
  };

  const handleColorChange = (color) => {
    execCommand('foreColor', color);
    setShowColorPicker(false);
  };

  const handleInsertLink = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    
    if (selectedText) {
      setLinkText(selectedText);
    } else {
      setLinkText('');
    }
    setShowLinkModal(true);
  };

  const insertLink = () => {
    if (linkUrl) {
      if (linkText) {
        // If we have custom text, create the link with that text
        const linkHTML = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">${linkText}</a>`;
        execCommand('insertHTML', linkHTML);
      } else {
        // If no text is provided, just insert the URL as a link
        execCommand('createLink', linkUrl);
      }
    }
    setShowLinkModal(false);
    setLinkUrl('');
    setLinkText('');
  };

  const colors = [
    '#000000', '#333333', '#666666', '#999999', '#cccccc',
    '#3b82f6', '#1d4ed8', '#2563eb', '#1e40af', '#1e3a8a',
    '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d',
    '#10b981', '#059669', '#047857', '#065f46', '#064e3b',
    '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f',
    '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'
  ];

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === 'new') {
      setShowNewCategory(true);
      setFormData(prev => ({ ...prev, catSlug: '' }));
    } else {
      setShowNewCategory(false);
      setNewCategoryName('');
      setFormData(prev => ({ ...prev, catSlug: value }));
    }
  };

  const handleNewCategoryChange = (e) => {
    const value = e.target.value;
    setNewCategoryName(value);
    
    // Auto-generate slug from category name
    const categorySlug = value
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    
    setFormData(prev => ({
      ...prev,
      catSlug: categorySlug
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setFormData(prev => ({
          ...prev,
          img: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview('');
    setFormData(prev => ({ ...prev, img: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      img: '',
      catSlug: '',
      userEmail: ''
    });
    setImagePreview('');
    setIsSubmitting(false);
    setShowNewCategory(false);
    setNewCategoryName('');
    setShowColorPicker(false);
    setShowLinkModal(false);
    setLinkUrl('');
    setLinkText('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm rounded-t-3xl border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Create New Post
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Fill in the details to create a new blog post</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-4 sm:p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Post Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your post title..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="post-url-slug"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 font-mono text-sm placeholder-gray-400"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Auto-generated from title, but you can customize it</p>
            </div>

            {/* Rich Text Content Editor */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content *
              </label>
              
              {/* Formatting Toolbar */}
              <div className="border border-gray-200 rounded-t-xl bg-gray-50 p-3 flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={handleBold}
                  className="p-2 rounded-lg bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:scale-105"
                  title="Bold"
                >
                  <Bold size={16} className="text-gray-700" />
                </button>
                
                <button
                  type="button"
                  onClick={handleItalic}
                  className="p-2 rounded-lg bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:scale-105"
                  title="Italic"
                >
                  <Italic size={16} className="text-gray-700" />
                </button>
                
                <button
                  type="button"
                  onClick={handleInsertLink}
                  className="p-2 rounded-lg bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:scale-105"
                  title="Insert Link"
                >
                  <Link size={16} className="text-gray-700" />
                </button>
                
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className="p-2 rounded-lg bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:scale-105"
                    title="Text Color"
                  >
                    <Palette size={16} className="text-gray-700" />
                  </button>
                  
                  {/* Color Picker Dropdown */}
                  {showColorPicker && (
                    <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-lg p-3 grid grid-cols-5 gap-1 z-10">
                      {colors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleColorChange(color)}
                          className="w-8 h-8 rounded-lg border border-gray-200 hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content Editor */}
              <div
                ref={contentRef}
                contentEditable
                onInput={handleContentChange}
                className="w-full min-h-[120px] px-4 py-3 border border-gray-200 border-t-0 rounded-b-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900"
                style={{ 
                  lineHeight: '1.5',
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}
                placeholder="Write your post content here... You can format text using the toolbar above."
                suppressContentEditableWarning={true}
              />
              
              <div className="text-xs text-gray-500 mt-1 text-right">
                {contentRef.current ? contentRef.current.textContent.length : 0} characters
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image
              </label>
              <div className="space-y-4">
                {imagePreview ? (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-xl border border-gray-200"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors transform hover:scale-110"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                      <p className="mb-2 text-sm text-gray-600">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="catSlug"
                value={showNewCategory ? 'new' : formData.catSlug}
                onChange={handleCategoryChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 appearance-none bg-white"
                required={!showNewCategory}
              >
                <option value="">Select a category</option>
                <option value="tutorial">📚 Tutorial</option>
                <option value="development">💻 Development</option>
                <option value="design">🎨 Design</option>
                <option value="backend">⚙️ Backend</option>
                <option value="mobile">📱 Mobile</option>
                <option value="frontend">🖥️ Frontend</option>
                <option value="devops">🚀 DevOps</option>
                <option value="ai-ml">🤖 AI/ML</option>
                <option value="web3">🌐 Web3</option>
                <option value="new" className="text-blue-600 font-semibold">➕ New Category</option>
              </select>
              
              {/* New Category Input */}
              {showNewCategory && (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Plus size={16} className="text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">Create New Category</span>
                  </div>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={handleNewCategoryChange}
                    placeholder="Enter new category name..."
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                    required
                  />
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-600">
                      Slug: <span className="font-mono text-blue-600">{formData.catSlug || 'auto-generated'}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setShowNewCategory(false);
                        setNewCategoryName('');
                        setFormData(prev => ({ ...prev, catSlug: '' }));
                      }}
                      className="text-xs text-gray-500 hover:text-red-500 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating...
                  </div>
                ) : (
                  'Create Post'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 w-full max-w-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Insert Link</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Link URL *
                </label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Link Text (optional)
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Link text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty to use the URL as the link text
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={insertLink}
                disabled={!linkUrl}
                className="flex-1 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}