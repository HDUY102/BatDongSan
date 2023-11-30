import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/img/logo.png'
import { FaHome,FaFile,FaOutdent,FaPoll,FaSignOutAlt  } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className='h-full text-center  px-4 pt-2 pb-4 bg-gray-300 text-black w-52'>
        <Image src={logo} width={100} height={100} className="ml-9 rounded-full" alt="LOGO"></Image>       
        <h1 className='text-3xl font-semibold mt-2'>Dash <span className='text-primary'>Board</span></h1>
        <div className='text-center mt-16 flex flex-col gap-y-20 font-bold'>
          <div className='flex items-center hover:text-primary'>
            <FaHome/>
            <Link href={'/admin'}>
              <p className='ml-2'>Tổng quan</p>
            </Link>
          </div>
          <div className='flex items-center hover:text-primary'>
            <FaFile/>
            <a className='ml-2' href={'/admin/articlemanage'}>Quản lý bài viết</a>
          </div>
          <div className='flex items-center hover:text-primary'>
            <FaOutdent/>
            <a className='ml-2' href="/admin/categorymanage">Quản lý danh mục</a>
          </div>
          <div className='flex items-center hover:text-primary'>
            <FaPoll/>
            <a className='ml-2' href="#">Quản lý thống kê</a>
          </div>
          <div className='flex items-center hover:text-primary '>
            <FaSignOutAlt/>
            <a className='ml-2' href={'/login'}>Đăng xuất</a>
        </div>
        </div>
        
    </div>
  )
}

export default SideBar