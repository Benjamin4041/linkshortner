import React from 'react'
// import Logo from ''
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Navbar() {
  return (
    <>
     <nav className='flex items-center justify-between pl-7 pr-7 p-6'>
        <span className='flex items-center'>
                <img src='assets/logo.svg' alt="logo" />
                <ul className=' gap-3 ml-7 hidden lg:flex'>
                    <li className='cursor-pointer font-poppins'>Features</li>
                    <li className='cursor-pointer font-poppins'>Pricing</li>
                    <li className='cursor-pointer font-poppins'>Resources</li>
                </ul>
        </span>

        <span className='lg:flex gap-8 hidden '>
            <button className='font-poppins text-lg'>Login</button>
            <button className='bg-[#2acfcf] p-2 pl-4 pr-4 rounded-full text-white font-poppins'>Sign Up</button>
        </span>
        <GiHamburgerMenu className='scale-150 lg:hidden'/>
    </nav>   
    </>
  )
}
