import React, { useState, useRef, useEffect } from 'react';
import { BellOutlined, HomeOutlined } from '@ant-design/icons';
import {
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    DownOutlined
} from '@ant-design/icons';

function Account() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { label: 'Profile', icon: <UserOutlined />, href: '#' },
        { label: 'Settings', icon: <SettingOutlined />, href: '#' },
        { label: 'Logout', icon: <LogoutOutlined />, href: '#' },
    ];
    // ปิดเมนูเมื่อคลิกข้างนอก
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex gap-6 items-center'>
            {/* Notification Icon */}
            <div className="flex items-center cursor-pointer hover:text-blue-300 transition-colors">
                <div className="relative">
                    <BellOutlined style={{ fontSize: '20px', color: 'white' }} />
                    <span className="absolute top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </div>
            </div>
            {/* Home Icon */}
            <div className="flex items-center cursor-pointer hover:text-blue-300 transition-colors">
                <HomeOutlined style={{ fontSize: '20px', color: 'white' }} />
            </div>
            {/* Account Dropdown */}
            <div className="relative" ref={menuRef}>
                <div className="flex items-center gap-2 cursor-pointer group" onClick={toggleMenu}>
                    <img src="Logo/creper.jpg" alt="Account" className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-blue-300 transition-all duration-300"/>
                    <DownOutlined
                        className={`text-gray-300 transition-transform duration-200 ${isMenuOpen ? 'transform rotate-180' : ''}`}/>
                </div>
                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-100">
                        <div className="py-1">
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    {item.label === 'Logout' && <div className="border-t border-gray-100 my-1"></div>}
                                    <a
                                        href={item.href}
                                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-t border-gray-100">
                            Signed in as <span className="font-medium">username</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Account;