import React from 'react'
import Image from 'next/image'
import IntroDuceImg from '@/app/img/IntroDuceImg.png'
const PropertyItem = () => {
  return (
    <div>
        <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
            <div className='text-center'>
              <Image className="max-h-auto max-h-24" src={IntroDuceImg} alt="bất động sản"/>
            </div>
            <h4 className='font-semibold text-xl my-3 '>Căn hộ cao cấp</h4>
            <p className='text-gray-600 text-sm text-left'>
                Nhà mặt tiền khu Đảo Xanh gần công viên APEC
                <br />
                Giá: 3 tỷ
            </p>
            <button className='bg-amber-500 text-white rounded-full mt-4 px-8 py-2'>
                Đặt mua 
            </button>
        </div>
    </div>
  )
}

export default PropertyItem