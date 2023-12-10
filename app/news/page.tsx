"use client"
import React,{useEffect,useState} from 'react'
import Link from "next/link";
import HeaderNav from '../components/HeaderNav'
import News from './News'
import Footer from '../components/Footer'
// import { post } from "@prisma/client";
import { usePostStore } from '../lib/hooks/usePostStore';
interface post{
  idPost: number;
  Title: string | null;
  User_idUser: number;
  Category_idCategory: number;
  Content: string | null;
  Date: Date | null
}
const page = () => {
  const { posts,fetchDataPosts } = usePostStore();
  const [visibleItems, setVisibleItems] = useState<number>(3);
  // const [postsToList, setPostsToList] = useState<post[]>(posts.slice(0, visibleItems));
  const [postsToList, setPostsToList] = useState<post[]>([]);

  // const handleLoadMore = () => {
  //   setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  //   setPostsToList(posts.slice(0, visibleItems + 3));
  // };
  useEffect(() => {
    fetchDataPosts();
  }, []);
  useEffect(() => {
    setPostsToList(posts.slice(0, visibleItems));
  }, [posts, visibleItems]);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  return (
    <section>
      <div>
        <News postsToList={postsToList}/>
        <div className='text-red items-center justify-center text-center mt-3'>
          <button onClick={handleLoadMore} className='hover:bg-red-500 hover:text-white font-semibold'>
            Xem Thêm
          </button>
        </div>
      </div>
      <Footer/>
    </section>
    
  )
}

export default page