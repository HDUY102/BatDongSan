import React from 'react'
import Link from "next/link";
import HeaderNav from '../components/HeaderNav'
import ItemNew from './ItemNew'
import Footer from '../components/Footer'
import { post } from "@prisma/client";

const News = ({postsToList}: {postsToList: post[]}) => {
  return (
    <section>
        <HeaderNav/>
        <div className='mt-8 text-center'>
            <h1 className=' font-bold text-3xl'>Tin tức bất động sản mới nhất</h1>
            <h5 className='text-gray-500 mt-4'>
            Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ 
            liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo sát thực tế của đội ngũ 
            phóng viên, biên tập của DreamHouse.com.vn.
            </h5>
        </div>
        <Link href={'/news'}>
          {postsToList?.map((post: post) => (
            <ItemNew key={post.idPost} post={post}/>
          ))}
        </Link>
        <div className='text-red items-center justify-center text-center mt-3'>
            <button className='hover:bg-red-500 hover:text-white font-semibold'>
                Xem Thêm
            </button>
        </div>
        <Footer/>        
    </section>
  )
}

export default News