import React from 'react'
import Image from 'next/image'
import about1 from '@/app/img/about1.jpg'
const ItemNew = () => {
  return (
    <div>
        <div className='mt-4 flex bg-gray-200 rounded-lg pt-2 pb-2 group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
            <div>
                <Image className='max-w-2 rounded-lg ml-4 mr-4' src={about1} alt="Dream House IntroDuce"></Image>
            </div>
            <div className='mt-2'>
                <div className='text-gray-500 left-0 text-xs text-left'>
                    <p>Ngày đăng</p>
                </div>
                <div className='text-black mt-4 justify-start hover:text-gray-500'>
                    <h2>Tiêu đề</h2>
                </div>
                <div className='text-gray-500 mt-2 left-0 text-xs text-left'>
                    <p>Nội Dung</p>
                </div>
            </div>
        </div>
        <hr className='mt-2' />
    </div>
  )
}

export default ItemNew