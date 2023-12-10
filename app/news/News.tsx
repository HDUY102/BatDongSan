"use client"
import React,{useEffect,useState} from 'react'
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
          {
            postsToList?.map((post: post) => (
              <Link key={post.idPost} href={`/news/${post.idPost}`}>
                <ItemNew post={post}/>
              </Link>
            ))
          }
    </section>
  )
}

export default News