import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";

export const Navbar = () => {
    const navlinks = [
        'Home',
        'New Arrival',
        'Delivery',
        'Contact'
    ]
    return (
        <div className='z-40 shadow w-full px-12 fixed bg-[#FEEAC2] h-[10vh] flex justify-center items-center'>
            <nav className='m-auto container flex justify-between items-center'>
                <a href="" className=''>
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="70px" height="70px" fill="none">
                        <path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path>
                    </svg>
                </a>
                <ul className='hidden md:flex space-x-12'>
                    {navlinks.map((item,index) => (
                        <li key={index}><a className='font-medium uppercasee' href="">{item}</a></li>
                    ))}
                </ul>
                <ul className='flex space-x-4'>
                    <FaShoppingBag size={20} />
                    <HiShoppingCart size={25}/>
                </ul>
            </nav>
        </div>
    )
}
