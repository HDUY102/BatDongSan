import React from 'react'
import SideBar from '../SideBar'
import HeaderNavAdmin from '../HeaderNavAdmin'

const page = () => {
  return (
    <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin/>
        <h1 className='mt-2 ml-4 font-bold'>Thêm bài viết</h1>

      </div>
    </div>
  )
}

export default page