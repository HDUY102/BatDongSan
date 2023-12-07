"use client";
import React,{useState} from 'react'
import AboutLocation from './AboutLocation';
import AboutProperty from './AboutProperty';
import AboutNews from './AboutNews';
import { usePropertyStore } from '../lib/hooks/usePropertyStore';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

const Property = () => {
  const { properties, getAllProperties } = usePropertyStore();
  const [propertyToList, setPropertiesToList] = useState(properties);
  function getAllPropertiesToList() {
    setPropertiesToList(getAllProperties);
  }
  return (
    <section>
        <div className='text-center my-16 '>
          <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold '>Bất Động Sản Dành Cho Bạn</h3>
            <Link href={'/category'} className='text-right flex ml-36 hover:text-primary'>
              Xem thêm
              <FaArrowRight className="mt-1"/>  
            </Link>
          </div>
          <div>
            <AboutProperty propertiesToList={propertyToList}/>
          </div>
        </div>
        <AboutNews/>
        <AboutLocation/>
    </section>
  )
}

export default Property