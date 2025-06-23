'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiAlignCenter } from "react-icons/fi";
import { ImCross } from "react-icons/im";

export default function AdminDrawer() {
    const [open, setOpen] = useState(false);
    const handleButtons = () => {
        setOpen(!open)
    }

    return (
      <>
       <div className="flex z-50">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-4 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
                <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
                <ImCross 
                    onClick={handleButtons} 
                    className={`absolute ${open ? 'block' : 'hidden'} cursor-pointer top-5 left-52 transition-transform duration-700 text-white`} 
                    size={15} 
                />

                <ul className="flex flex-col gap-4">
                    <li>
                        <Link href="/" className="hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/posts" className="hover:text-gray-300 transition-colors">
                            Manage Posts
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users" className="hover:text-gray-300 transition-colors">
                            Manage Users
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/ss" className="hover:text-gray-300 transition-colors">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <FiAlignCenter 
            onClick={handleButtons} 
            className={`text-white ${open ? 'hidden' : 'block'} lg:hidden absolute top-3 left-5 cursor-pointer z-50 text-2xl`} 
        />
      </> 
    );
}