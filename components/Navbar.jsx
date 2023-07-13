'use client'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed sm:relative z-10 sm:z-0 w-full flex justify-between p-6 bg-white md:justify-center sm:p-28'>
            <div className='m-2 bg-white '>
                <img
                    className="w-[50%] sm:pt-10 sm:w-full"
                    src="https://static.wixstatic.com/media/1a8dae_ceea70d8f1404e4485e2e0ab9eb56c17~mv2.png/v1/fill/w_81,h_93,al_c,lg_1,q_85,enc_auto/me_logo.png"
                    alt="Logo"
                />
            </div>
            {<div onClick={handleNav} className='m-2 bg-white md:hidden'>
                {!nav && <AiOutlineMenu size={35} />}
            </div>}
            {nav && <div className='fixed w-screen sm:hidden h-screen bg-white p-3 ease-in duration-1000'>
                {<div onClick={handleNav} className='m-5 rounded-full  w-fit shadow-lg shadow-gray-600 p-3 cursor-pointer'>
                    <AiOutlineClose />
                </div>}
            </div>}
        </div>

    )
}

export default Navbar