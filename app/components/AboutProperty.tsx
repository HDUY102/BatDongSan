import React from 'react'
import PropertyItem from './PropertyItem'
import { FaArrowRight } from "react-icons/fa";


const AboutProperty = () => {
  return (
        <section className='text-center my-16 '>
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
        </section>
  )
}

export default AboutProperty