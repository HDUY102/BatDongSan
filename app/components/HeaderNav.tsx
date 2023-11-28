import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/app/img/logo.png'
import { FaHeart } from "react-icons/fa6";

const HeaderNav = () => {
  return (
    <div>
        {/* Page Header BEGIN */}
        <header className='flex items-center justify-between bg-cyan-800 h-16'>
            <nav className=' flex items-center gap-8 text-white font-semibold'>
                <Link className='w-16' href={'/'}>
                  <Image src={logo} width={150} height={150} className="p-2 ml-3 rounded-full" alt="LOGO"></Image>        
                </Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-full px-6 tooltip tooltip-bottom" data-tip="Home" href="/">Home</Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-full px-6 tooltip tooltip-bottom" data-tip="About" href={'/about'}>About</Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-full px-6 tooltip tooltip-bottom" data-tip="Category" href={'/category'}>Category</Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-full px-6 tooltip tooltip-bottom" data-tip="News" href={"/news"}>News</Link>
            </nav>
            <nav className='flex items-center gap-6 text-gray-500 font-semibold'>
                <Link className="text-white hover:text-red-500 tooltip tooltip-bottom" href={'/admin'} data-tip="Favourite">
                  <FaHeart/>  
                </Link>
                <Link className="bg-primary rounded-full text-white px-8 py-2 hover:bg-white hover:text-red-500 mr-3 tooltip tooltip-bottom" href={'/login'} data-tip="Login">Login</Link>
            </nav>
        </header>
        {/* Page Header END */}
    </div>
  )
}

export default HeaderNav