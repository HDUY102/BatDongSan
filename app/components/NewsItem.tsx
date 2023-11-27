import React from 'react'
import Image from 'next/image'
import IntroDuceImg from '@/app/img/IntroDuceImg.png'
const NewsItem = () => {
  return (
    <div>
        <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
            <div className='text-center'>
              <Image className="max-h-auto max-h-28" src={IntroDuceImg} alt="bất động sản"/>
            </div>
            <div className='flex mt-3'>
                <h1 className='font-bold  text-xl my-3 '>01</h1>
                <p className='text-gray-600 ml-4 text-sm text-left'>
                     Chủ tịch mới đầu tư khu Đảo Xanh
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsItem