import React from 'react'
import SideBar from '../SideBar'
import { FaPlusCircle} from "react-icons/fa";
import HeaderNavAdmin from '../HeaderNavAdmin';
import Link from 'next/link'
const Categorymanage = () => {
  return (
    <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <div>
            <HeaderNavAdmin/>
            <div className='flex justify-between'>
                <h1 className='mt-2 ml-4 font-bold'>Quản Lý Danh Mục</h1>
                <button className='border-none text-black hover:text-red-500  flex items-center '>
                    <FaPlusCircle />
                    Thêm loại danh mục
                </button>
            </div>
            <div className='mt-10 ml-4'>
                <h1 className='font-semibold'>Loại địa phương</h1>
                <div className='flex justify-between'>
                    <select className="select select-bordered join-item mt-3">
                        <option disabled selected>Tỉnh/Thành phố</option> 
                        <option>Hà Nội</option>
                        <option>Đà Nẵng</option>
                        <option>TP. HCM</option>
                    </select>
                    <select className="select select-bordered join-item mt-3">
                        <option disabled selected>Quận/Huyện</option> 
                        <option>Hải Châu</option>
                        <option>Cẩm Lệ</option>
                        <option>Ngũ Hành Sơn</option>
                    </select>
                    <select className="select select-bordered join-item mt-3">
                        <option disabled selected>Phường/Xã</option> 
                        <option>Thanh Bình</option>
                        <option>Thạch Thang</option>
                        <option>Nam Dương</option>
                    </select>
                </div>
            </div>
            <div className=''>
                <div className='mt-10 ml-4'>
                    <h1 className='font-semibold'>Loại giao dịch</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                <th>STT</th>
                                <th>Giao dịch</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td className='text-white flex '>
                                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                                </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                <th>2</th>
                                <td>Cy Ganderton</td>
                                <td className='text-white flex '>
                                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                                </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                <th>3</th>
                                <td>Cy Ganderton</td>
                                <td className='text-white flex '>
                                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-10 ml-4'>
                    <h1 className='font-semibold'>Loại tài nguyên</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                <th>STT</th>
                                <th>Tài nguyên</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td className='text-white flex '>
                                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                                </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                <th>2</th>
                                <td>Cy Ganderton</td>
                                <td className='text-white flex '>
                                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                                </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                <th>3</th>
                                <td>Cy Ganderton</td>
                                <td className='text-white flex '>
                                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                                    <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>                  
            </div>
        </div>
    </div>
  )
}

export default Categorymanage