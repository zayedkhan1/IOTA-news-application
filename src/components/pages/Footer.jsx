import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm tracking-wide">
                    © {new Date().getFullYear()} All rights reserved - <span className='text-emerald-400 underline'>Zayed Khan</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;