import React from 'react'
import SideBar from '../SideBar'
import { FaPlusCircle,FaFile    } from "react-icons/fa";
import HeaderNavAdmin from '../HeaderNavAdmin';
import Link from 'next/link'

const Articlemanage = () => {
  return (
    <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin/>
        <div className='flex justify-between mt-8'>
          <h1 className='mt-2 ml-4 font-bold'>Quản Lý Bài Viết</h1>
          <Link href={"/admin/addarticle"}>
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
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tiêu đề</th>
                  <th>Ngày đăng</th>
                  <th>Giá tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>30/12/2023</td>
                  <td>$20.000.000</td>
                  <th className='text-white flex '>
                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                    <button className="text-blue-600 border-none hover:text-white hover:bg-blue-600">Duyệt</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Cy Ganderton</td>
                  <td>30/12/2023</td>
                  <td>$20.000.000</td>
                  <th className='text-white flex '>
                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                    <button className="text-blue-600 border-none hover:text-white hover:bg-blue-600">Duyệt</button>
                  </th>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>HCM</td>
                  <td>20/10/2023</td>
                  <td>$50.000.000</td>
                  <th className='text-white flex '>
                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                    <button className="text-blue-600 border-none hover:text-white hover:bg-blue-600">Duyệt</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default Articlemanage