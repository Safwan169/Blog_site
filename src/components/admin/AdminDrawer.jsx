// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import { FiAlignCenter } from "react-icons/fi";
// import { ImCross } from "react-icons/im";

// export default function AdminDrawer() {
//     const [open, setOpen] = useState(false);
//     const handleButtons = () => {
//         setOpen(!open)
//     }

//     return (
//       <>
//        <div className="flex z-50">
//             {/* Sidebar */}
//             <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-4 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
//                 <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
//                 <ImCross 
//                     onClick={handleButtons} 
//                     className={`absolute ${open ? 'block' : 'hidden'} cursor-pointer top-5 left-52 transition-transform duration-700 text-white`} 
//                     size={15} 
//                 />

//                 <ul className="flex flex-col gap-4">
//                     <li>
//                         <Link href="/" className="hover:text-gray-300 transition-colors">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/dashboard/posts" className="hover:text-gray-300 transition-colors">
//                             Manage Posts
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/users" className="hover:text-gray-300 transition-colors">
//                             Manage Users
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/dashboard/ss" className="hover:text-gray-300 transition-colors">
//                             Dashboard
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>

//         <FiAlignCenter 
//             onClick={handleButtons} 
//             className={`text-white ${open ? 'hidden' : 'block'} lg:hidden absolute top-3 left-5 cursor-pointer z-50 text-2xl`} 
//         />
//       </> 
//     );
// }

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiAlignCenter, FiHome, FiFileText, FiUsers, FiBarChart } from "react-icons/fi";
import { ImCross } from "react-icons/im";

export default function AdminDrawer() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive behavior
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            // Auto-close drawer on mobile when resizing to desktop
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleLinkClick = () => {
        // Close drawer on mobile when link is clicked
        if (isMobile) {
            setOpen(false);
        }
    };

    const navigationItems = [
        { href: '/', label: 'Home', icon: FiHome },
        { href: '/dashboard/posts', label: 'Manage Posts', icon: FiFileText },
        { href: '/admin/users', label: 'Manage Users', icon: FiUsers },
        { href: '/dashboard/ss', label: 'Dashboard', icon: FiBarChart },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {open && isMobile && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={handleToggle}
                />
            )}

            {/* Mobile Menu Button */}
            <button
                onClick={handleToggle}
                className={`fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white shadow-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden ${
                    open ? 'translate-x-64' : 'translate-x-0'
                }`}
                aria-label="Toggle menu"
            >
                <FiAlignCenter className="w-5 h-5" />
            </button>

            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white w-64 
                transform transition-transform duration-300 ease-in-out z-50 shadow-2xl
                ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Admin Panel
                    </h2>
                    
                    {/* Close button for mobile */}
                    <button
                        onClick={handleToggle}
                        className="p-1 rounded-lg hover:bg-gray-700 transition-colors md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Close menu"
                    >
                        <ImCross className="w-4 h-4" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4">
                    <ul className="space-y-2">
                        {navigationItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <IconComponent className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                    <div className="text-xs text-gray-400 text-center">
                        Admin Dashboard v1.0
                    </div>
                </div>
            </aside>

            {/* Main content spacer for desktop */}
            <div className="hidden md:block md:w-64 flex-shrink-0" />
        </>
    );
}