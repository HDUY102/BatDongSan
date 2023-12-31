"use client"
import React,{useEffect,useState} from 'react'
import ListCategory from './ListCategory'
import { FaSearch   } from 'react-icons/fa'
import Footer from '../components/Footer'
import HeaderNav from '../components/HeaderNav'
import { usePropertyStore } from '../lib/hooks/usePropertyStore'
import AboutProperty from './AboutProperty'

interface Property {
  idProperty: number;
  Title: string | null;
  Description: string | null;
  Content: string | null;
  Address: string | null;
  Price: number | null;
  Area: number | null;
  NumberRoom: number | null;
  Category_idCategory: number;
  User_idUser: number;
}

const Category = () => {
  const {properties,fetchData} = usePropertyStore();
  const [propertyToList, setPropertiesToList] = useState<Property[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(3);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPropertiesToList(properties.slice(0, visibleItems));
  }, [properties, visibleItems]);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  return (
    <div>
        <HeaderNav/>
        <div className="join flex ml-60 mt-3 w-96">
          <div>
            <div>
              <input className="input input-bordered join-item" placeholder="Bạn đang muốn tìm gì?"/>
            </div>
          </div>
          <select className="select select-bordered join-item ">
            <option disabled selected>Loại</option> 
            <option>Dự án</option>
            <option>Thuê</option>
            <option>Bán</option>
          </select>
          <div className="tooltip tooltip-bottom indicator" data-tip="Search">
            <button className="btn join-item bg-amber-500 border-1 w-24 items-center justify-center text-white px-2 py-2" >
              <FaSearch className="mt-1"/>
            </button>
          </div>
        </div>
        <div className='mt-8 text-center'>
            <h1 className=' font-bold text-3xl'>Bất động sản mới nhất</h1>
            <h5 className='text-gray-500 mt-4'>
            Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ 
            liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo sát thực tế của đội ngũ 
            phóng viên, biên tập của DreamHouse.com.vn.
            </h5>
        </div>
        <ListCategory/>
        <section className='text-center '>
          <div className=' gap-4'>
            <AboutProperty propertiesToList={propertyToList}/>
          </div>
        </section>
        <div className='text-red items-center justify-center text-center mb-4'>
            <button  onClick={handleLoadMore} className='hover:bg-red-500 hover:text-white font-semibold'>
                Xem Thêm
            </button>
        </div>
        <Footer/>
    </div>
  )
}

export default Category
