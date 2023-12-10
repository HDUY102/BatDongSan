"use client"
import { FaSearch   } from 'react-icons/fa'
import {useEffect} from 'react'
import Footer from './components/Footer'
import IntroDuce from './components/IntroDuce'
import Property from './category/Property'
import HeaderNav from './components/HeaderNav'
import { usePropertyStore } from './lib/hooks/usePropertyStore'
import { usePostStore } from './lib/hooks/usePostStore'

export default function Home() {
  const {fetchData , isLoading} = usePropertyStore();
  const {fetchDataPosts,isLoadingPost } = usePostStore();

  useEffect(() => {
    fetchData();
    fetchDataPosts();
  }, []);
  return (
    <div>
      <HeaderNav/>
      <div className='justify-center items-center flex ml-60 mt-3 w-96'>
        <div className="join">
          <div>
            <input className="input input-bordered join-item" placeholder="Bạn đang muốn tìm gì?"/>
          </div>
          <select className="select select-bordered join-item ">
            <option disabled selected>Loại</option> 
            <option>Dự án</option>
            <option>Thuê</option>
            <option>Bán</option>
          </select>
          <div className="tooltip tooltip-bottom indicator" data-tip="Search">
            <button className="btn join-item bg-amber-500 border-1 w-24 items-center justify-center text-white px-2 py-2">
              <FaSearch className="mt-1"/>
            </button>
          </div>
        </div>
      </div>
      <IntroDuce/>
      <div>
        { isLoadingPost || isLoading ? (
          <div className="text-center text-lg">Loading...</div>
          ) : (
            <Property />
          )}
      </div>
      <Footer/>
    </div>
  )
}
