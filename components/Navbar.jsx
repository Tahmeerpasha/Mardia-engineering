'use client'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="fixed sm:relative z-10 sm:z-0 w-full flex justify-between p-6 bg-white md:justify-center sm:p-28">
            <div className="m-2">
                <img
                    className="w-[50%] sm:pt-10 sm:w-full"
                    src="https://static.wixstatic.com/media/1a8dae_ceea70d8f1404e4485e2e0ab9eb56c17~mv2.png/v1/fill/w_81,h_93,al_c,lg_1,q_85,enc_auto/me_logo.png"
                    alt="Logo"
                />
            </div>
            <div className="m-2 bg-white md:hidden" onClick={handleNav}>
                {!navOpen && <AiOutlineMenu size={35} />}
            </div>
            {navOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white p-3 z-50">
                    <div className="m-5 rounded-full w-fit shadow-lg shadow-gray-600 p-3 cursor-pointer" onClick={handleNav}>
                        <AiOutlineClose />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
