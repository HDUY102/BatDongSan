import React from 'react'
import logo from '@/app/img/logo.png'
import Image from 'next/image'
import {FaSearch  } from "react-icons/fa";

const HeaderNavAdmin = () => {
  return (
    <div>
        <div className='pt-1 flex'>
          <header className='flex items-center justify-between text-black h-16'>
            <nav className=' flex items-center gap-8 font-semibold'>
              <div className="join flex item-center">
              <input type="text" placeholder="Search" className="input input-bordered input-error ml-3 w-16 h-10" />
                <div className="tooltip tooltip-bottom indicator" data-tip="Search">
                  <button className="hover:text-primary mt-2 ml-0 border-0">
                    <FaSearch className="mt-1"/>
                  </button>
                </div>
              </div>
            </nav>
          </header>
          <div className='mt-4 ml-80'>
            <Image  src={logo} width={120} height={120} className="w-10 h-10 rounded-full"  alt="Rounded avatar"></Image>
          </div>
        </div>
    </div>
  )
}

export default HeaderNavAdmin