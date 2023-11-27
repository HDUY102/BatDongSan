import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/app/img/logo.png'

const HeaderNav = () => {
  return (
    <div>
        {/* Page Header BEGIN */}
        {/* <ul className='menu menu-horizontal bg-stone-900 rounded-box flex font-sans justify-evenly font-bold text-white'>
            <Link className="text-primary font-semibold texxt-2xl " href="">DreamHouse</Link>
            
            <li className='hover:bg-white hover:text-black rounded-box'>
                <Link href={'/'}>HOME</Link>
            </li>
            <li className='hover:bg-white hover:text-black rounded-box'>
                <Link href={'/Categories'}>CATEGORIES</Link></li>
            <li className='hover:bg-white hover:text-black rounded-box'>
                <Link href={'/About'}>ABOUT</Link>
            </li>
            <li className='hover:bg-white hover:text-black rounded-box'>
                <Link href={'/Contact'}>CONTACT</Link>
            </li>
            <li className='hover:bg-white hover:text-black rounded-box'>
                <Link href={'/Login'}>LOGIN</Link>
            </li>
        </ul> */}
        <header className='flex items-center justify-between bg-cyan-950 h-16'>
            <Image src={logo} width={70} height={20} className="p-2 ml-3 rounded-badge" alt="LOGO"></Image>
            <nav className=' flex items-center gap-8 text-white font-semibold'>
                <Link className="p-2 hover:bg-white hover:text-black rounded-box" href="">Home</Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-box" href="">About</Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-box" href="">Category</Link>
                <Link className="p-2 hover:bg-white hover:text-black rounded-box" href="">Contact</Link>
                <Link className="bg-amber-300 rounded-full text-white px-8 py-2 hover:bg-white hover:text-red-500 mr-3" href="">Login</Link>
            </nav>
        </header>
        {/* Page Header END */}
    </div>
  )
}

export default HeaderNav