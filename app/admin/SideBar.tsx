import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/img/logo.png'

const SideBar = () => {
  return (
    <div className='h-screen px-4 pt-2 pb-4 bg-gray-300 text-black flex flex-col w-52  justify-between'>
        {/* <Link className='w-16 ml-12' href={'/'}>
           <Image src={logo} width={150} height={150} className="ml-3 rounded-full" alt="LOGO"></Image>        
        </Link> */}
        <h1 className='text-3xl font-semibold'>Dash <span className='text-primary'>Board</span></h1>
    </div>
  )
}

export default SideBar