import React, { useContext, useState } from 'react'
import SideBar from '../../SideBar'
import HeaderNavAdmin from '../../HeaderNavAdmin'
import Link from 'next/link'
// async function saveNewArticle() {
//     const value = useContext(AppContext)
//     const [saveNewArticle, setNewArticle] = useState({
//       // User_id: "",
//       // date: "",
//       Title: "",
//       Address: "",
//       // categoryName: "",
//       Phone: "",
//       Content: "",
//       ImagePost: "",
//       Area: "",
//       Price: "",

//     });

// }

const AddArticle = () => {
  return (
    <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin/>
        <h1 className='mt-1 ml-4 font-bold'>Thông tin cơ bản</h1>
        <div className='flex justify-between mt-1'>
          <select className="select select-bordered join-item ml-4">
            <option disabled selected>Tỉnh/Thành phố</option> 
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>TP. HCM</option>
          </select>
          <select className="select select-bordered join-item">
            <option disabled selected>Quận/Huyện</option> 
            <option>Hải Châu</option>
            <option>Cẩm Lệ</option>
            <option>Ngũ Hành Sơn</option>
          </select>
          <select className="select select-bordered join-item">
            <option disabled selected>Phường/Xã</option> 
            <option>Thanh Bình</option>
            <option>Thạch Thang</option>
            <option>Nam Dương</option>
          </select>
        </div>    
        <div className='flex justify-evenly mt-2'>
          <select className="select select-bordered join-item">
            <option disabled selected>Loại giao dịch</option> 
            <option>Thuê</option>
            <option>Bán</option>
            <option>Dự án</option>
          </select> 
          <select className="select select-bordered join-item">
            <option disabled selected>Loại bất động sản</option> 
            <option>Nhà</option>
            <option>Đất</option>
            <option>Căn hộ</option>
          </select> 
        </div>
        <h3 className='mt-1 ml-4'>Địa chỉ</h3> 
        <input  type="text" placeholder="VD: 123 Đống Đa" className="ml-3 input input-bordered  max-w-xs" /> 
        <h1 className='mt-2 ml-4 font-bold'>Thông tin bài viết</h1>
        <div className='flex'>
          <input type="text" placeholder="Tiêu đề" className="ml-3 input input-bordered  max-w-xs" />
          <input type="text" placeholder="Số điện thoại" className="ml-3 input input-bordered  max-w-xs" />
        </div> 
        <h3 className='mt-1 ml-4'>Nội dung</h3> 
        <textarea placeholder="" className="ml-3 mt-2 textarea textarea-bordered textarea-lg w-full max-w-full" ></textarea>
        <input type="file" className="ml-3 file-input file-input-bordered w-full max-w-xs" />
        <h1 className='mt-2 ml-4 font-bold'>Thông tin bất động sản</h1>
        <div className='grid grid-cols-2 ml-3 mb-3'>
          <div>
              <div>
                <input className="input input-bordered" placeholder="Diện tích"/>
              </div>
              <div>
                <input className="input input-bordered mt-3" placeholder="Số lượng phòng"/>
              </div>
          </div>
          <div>
              <div>
                <input className="input input-bordered" placeholder="Giá"/>
              </div>
              <div>
                <input className="input input-bordered mt-3" placeholder="Số tầng"/>
              </div>
          </div>
        </div>
        <div className='flex justify-end mb-3'>
          <Link href={'/admin/articlemanage'}>
            <button className='hover:text-primary mr-3'>Hủy</button>
          </Link>
          <button className='hover:text-primary'>Thêm</button>
        </div>
      </div>
    </div>
  )
}

export default AddArticle