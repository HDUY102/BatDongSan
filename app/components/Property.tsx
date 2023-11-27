import React from 'react'
import PropertyItem from './PropertyItem'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image'
import IntroDuceImg from '@/app/img/IntroDuceImg.png'
import DN from '@/app/img/DN.png'
import HCM from '@/app/img/HCM.png'
import HN from '@/app/img/HN.png'
import HP from '@/app/img/HP.png'
import NT from '@/app/img/NT.png'
import NewsItem from './NewsItem';

const Property = () => {
  return (
    <section>
        <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold mb-4'>Bất Động Sản Dành Cho Bạn</h3>
            <a href="#" className='text-right flex ml-36 hover:text-primary'>
                <u>Xem thêm</u>
                <FaArrowRight className="mt-1"/>  
            </a>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
        </div>
        <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold mb-4 mt-4'>Tin Tức Bất Động Sản</h3>
            <a href="#" className='text-right flex ml-48 mt-4 hover:text-primary'>
                <u>Xem thêm</u>
                <FaArrowRight className="mt-1"/>  
            </a>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        <div>
            <h3 className='text-gray-500 font-bold mb-4 mt-4'>Địa Phương</h3>
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
                    <Image className="rounded-lg" src={HCM} alt="bất động sản"/>
                </div>
                <div className='m-1'>
                    <p className='absolute text-white ml-2 mt-2'>Hà Nội</p>
                    <Image className="rounded-lg" src={HN} alt="bất động sản"/>
                </div>
                <div className='m-1'>
                    <p className='absolute text-white ml-2 mt-2 '>Hải Phòng</p>
                    <Image  className='h-30 rounded-lg' src={HP} alt="bất động sản"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Property