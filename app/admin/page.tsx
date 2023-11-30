import React from 'react'
import SideBar from './SideBar'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import HeaderNavAdmin from './HeaderNavAdmin';
const HomeAdmin = () => {
  return (
    <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <HeaderNavAdmin/>  
    </div>
  )
}

export default HomeAdmin