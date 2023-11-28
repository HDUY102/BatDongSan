import React from 'react'

const ListCategory = () => {
  return (
    <div className='flex justify-evenly'>
        {/* <div className="dropdown dropdown-hover mt-8">
            <div tabIndex={0} role="button" className="btn m-1">Loại bất động sản</div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Dự án</a></li>
                <li><a>Thuê</a></li>
                <li><a>Bán</a></li>
            </ul>
        </div> */}
        <div className='mt-10 ml-4'>
            <select className="select select-bordered join-item ">
                <option disabled selected>Loại giao dịch</option> 
                <option>Thuê</option>
                <option>Bán</option>
                <option>Dự án</option>
            </select>   
        </div>
        <div className='mt-10 ml-4'>
            <select className="select select-bordered join-item ">
                <option disabled selected>Thành Phố</option> 
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>TP. Hồ Chí Minh</option>
            </select>   
        </div>
        <div className='mt-10 ml-4'>
            <select className="select select-bordered join-item ">
                <option disabled selected>Giá</option> 
                <option>Dưới 100 triệu</option>
                <option>Dưới 1 tỷ</option>
                <option>Trên 100 triệu</option>
            </select>   
        </div>
        <div className='mt-10 ml-4'>
            <select className="select select-bordered join-item ">
                <option disabled selected>Diện tích</option> 
                <option>Dưới 30 m²</option>
                <option>30 - 50 m²</option>
                <option>200 - 500 m²</option>
            </select>   
        </div>
    </div>
  )
}

export default ListCategory