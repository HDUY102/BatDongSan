"use client";
import React,{useState} from 'react'
import AboutLocation from './AboutLocation';
import AboutProperty from './AboutProperty';
import AboutNews from './AboutNews';
import { usePropertyStore } from '../lib/hooks/usePropertyStore';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'
import { usePostStore } from '../lib/hooks/usePostStore';

const Property = () => {
  const { properties } = usePropertyStore();
  const { posts } = usePostStore();
  const [propertyToList] = useState(properties.slice(0, 3));
  const [postsToList] = useState(posts.slice(0, 3));
  return (
    <section>
        <div className='text-center my-16 '>
          <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold '>Bất Động Sản Dành Cho Bạn</h3>
            <Link href={'/category'} className='text-right flex ml-44 hover:text-primary'>
              Xem thêm
              <FaArrowRight className="mt-1"/>  
            </Link>
          </div>
          <div>
            <AboutProperty propertiesToList={propertyToList}/>
          </div>
        </div>
        <div className='text-center my-16 '>
          <div className='flex gap-x-96'>
            <h3 className='text-gray-500 font-bold '>Tin Tức Bất Động Sản</h3>
            <Link href={'/news'} className='text-right flex ml-56 mb-4 hover:text-primary'>
              Xem thêm
              <FaArrowRight className="mt-1"/>  
            </Link>
          </div>
          <div>
            <AboutNews postsToList={postsToList}/>
          </div>
        </div>
        <AboutLocation/>
    </section>
  )
}

export default Property