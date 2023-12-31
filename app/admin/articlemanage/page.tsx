"use client"
import React, {useEffect} from 'react'
import SideBar from '../SideBar'
import { FaPlusCircle,FaFile} from "react-icons/fa";
import HeaderNavAdmin from '../HeaderNavAdmin';
import Link from 'next/link'
import ListArticles from './ListArticles';
import { usePostStore } from '@/app/lib/hooks/usePostStore';

const ArticleManage =  () => {

  const {fetchDataPosts , isLoadingPost} = usePostStore();

  useEffect(() => {
    fetchDataPosts();
  }, []);

  return (
    <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin/>
        <div className='flex justify-between mt-8'>
          <h1 className='mt-2 ml-4 font-bold'>Quản Lý Bài Viết</h1>
          <Link href={"/admin/articlemanage/addarticle"}>
            <button className='bg-sky-800 text-white hover:bg-white hover:text-red-500  flex items-center '>
              <FaPlusCircle />
              Đăng bài mới
            </button>
          </Link>
        </div>
        <div className='flex mt-8 mb-6 justify-between'>
          <div className='ml-4'>
            <p>Tổng số bài hiện tại</p>
            <div className='flex justify-between text-gray-500'>
              <FaFile className='text-sky-400'/>
              20 bài
            </div>
          </div>
          <div className='ml-4'>
            <p>Tổng số bài chưa duyệt</p>
            <div className='flex justify-between text-gray-500'>
              <FaFile className='text-sky-400'/>
              3 bài
            </div>
          </div>
          <div className='ml-4'>
            <p>Tổng số bài đã duyệt</p>
            <div className='flex justify-between text-gray-500'>
              <FaFile className='text-sky-400'/>
              17 bài
            </div>
          </div>
        </div>
        <div>
          {isLoadingPost ? (
          <div className="text-center text-lg">Loading...</div>
          ) : (
            <ListArticles />
          )}
        </div> 
      </div> 
    </div>
  )
}

export default ArticleManage