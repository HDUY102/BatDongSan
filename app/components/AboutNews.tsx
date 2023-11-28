import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import NewsItem from './NewsItem';


const AboutProperty = () => {
  return (
        <section className='text-center my-16 '>
        <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold mb-4 mt-4'>Tin Tức Bất Động Sản</h3>
            <a href={'/news'} className='text-right flex ml-48 mt-4 hover:text-primary'>
                <u>Xem thêm</u>
                <FaArrowRight className="mt-1"/>  
            </a>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        </section>
  )
}

export default AboutProperty