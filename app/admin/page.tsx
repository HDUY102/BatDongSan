import React from 'react'
import SideBar from './SideBar'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/img/logo.png'
import { FaSearch,FaRegBell  } from "react-icons/fa";
 
const HomeAdmin = () => {
  return (
    <div className='flex flex-row'>
      <div className=''>
        <SideBar />
      </div>
      <div className='flex'>
        <div className='pt-2 '>
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
        </div>
        <div className='mt-8 mr-0 hover:text-primary  hover:tooltip hover:tooltip-bottom' data-tip="Thông báo">
          <FaRegBell/>
        </div>
        {/* <div className="avatar">
          <div className="w-16 rounded-full">
            <Image src={''} width={100} height={100} alt=''></Image>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default HomeAdmin