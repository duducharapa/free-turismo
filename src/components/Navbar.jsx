import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <img className='h-[100%] object-contain' alt="logo0" src={logo} />
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer font-semibold text-2xl'>
                    <a href='https://www.instagram.com/nonatofreeturismo/'>
                        <i class="fa fa-instagram text-[2rem]" aria-hidden="true"></i>
                    </a>
                </li>
                {/* <li className='p-4 cursor-pointer font-semibold text-2xl'>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </li> */}
                <li className='p-4 cursor-pointer font-semibold text-2xl'>
                    <a href="https://wa.me/+558899099358">
                        <i class="fa fa-whatsapp text-[2rem]"></i>
                    </a>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <img className={nav ? 'h-[10%] object-contain' : 'hidden'} alt="logo0" src={logo} />
                <li className='p-5 border-b border-gray-600'>
                    <a href='https://www.instagram.com/nonatofreeturismo/'>
                        Instagram
                    </a>
                </li>
                {/* <li className='p-4 cursor-pointer border-b border-gray-600'>
                    <a href=''>
                        Email
                    </a>
                </li> */}
                <li className='p-4 cursor-pointer'>
                    <a href="https://wa.me/+558899099358">
                        Whatsapp
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;