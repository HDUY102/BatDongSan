import React from 'react'
import Image from 'next/image'
import DN from '@/app/img/DN.png'
import HCM from '@/app/img/HCM.png'
import HN from '@/app/img/HN.png'
import HP from '@/app/img/HP.png'
import NT from '@/app/img/NT.png'

const AboutLocation = () => {
  return (
    <div>
        {/* <IntroDuce/> */}
        <section className='text-center my-16 '>
        <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold mb-4 mt-4'>Địa phương</h3>
        </div>
        <div className='grid grid-cols-2'>
            <div className='relative'>
                <p className='absolute text-white ml-2 mt-2'>Đà Nẵng</p>
                <Image className="rounded-lg" src={DN} alt="bất động sản"/>
            </div>
            <div className='grid grid-cols-2 ml-2 '>
                <div className='m-1'>
                    <p className='absolute text-white ml-2 mt-2'>Nha Trang</p>
                    <Image className="rounded-lg" src={NT} alt="bất động sản"/>
                </div>
                <div className='m-1'>
                    <p className='absolute text-white ml-2 mt-2'>TP. HCM</p>
                    <Image className="h-32 rounded-lg" src={HCM} alt="bất động sản"/>
                </div>
                <div className='m-1'>
                    <p className='absolute text-white ml-2 mt-2'>Hà Nội</p>
                    <Image className="rounded-lg" src={HN} alt="bất động sản"/>
                </div>
                <div className='m-1'>
                    <p className='absolute text-white ml-2 mt-2 '>Hải Phòng</p>
                    <Image  className='h-32 rounded-lg' src={HP} alt="bất động sản"/>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default AboutLocation