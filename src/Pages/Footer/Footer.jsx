import React from 'react';

function Footer() {
    return (
        <div className="bg-gray-800 text-white py-6  overflow-hidden absolute bottom-0 w-full max-w-full">
            <div className="container mx-auto text-center px-6">
                {/* ข้อความลิขสิทธิ์ */}
                <p className="text-sm text-gray-400">&copy; 2025 Your Company. All Rights Reserved.</p>
                <div className="mt-4 space-x-6">
                    {/* ลิงก์ */}
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
                </div>
            </div>
        </div>


    );
}

export default Footer;
