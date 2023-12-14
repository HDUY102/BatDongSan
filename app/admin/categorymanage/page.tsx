"use client";
import React, { useEffect } from "react";
import SideBar from "./../SideBar";
import { FaPlusCircle } from "react-icons/fa";
import HeaderNavAdmin from "./../HeaderNavAdmin";
import Link from "next/link";
import { useCategoryStore } from "@/app/lib/hooks/useCategoryStore";
import ListCategory from "./ListCategory";

const Categorymanage = () => {
  const { fetchDataCategory, isLoadingCategory } = useCategoryStore();

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <div className="flex ">
      <div className="max-w-[30%]">
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin />
        <div className="flex justify-between">
          <h1 className="mt-2 ml-4 font-bold">Quản Lý Danh Mục</h1>
          <Link href={"/admin/categorymanage/add"}>
            <button className="border-[1px] text-black hover:bg-white hover:text-red-500  flex items-center ">
              <FaPlusCircle />
              Thêm danh mục
            </button>
          </Link>
        </div>
        {/* <div className="mt-4 ml-4">
          <h1 className="font-semibold">Loại địa phương</h1>
          <div className="flex justify-between">
            <select className="select select-bordered join-item mt-3">
              <option disabled selected>
                Tỉnh/Thành phố
              </option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              <option>TP. HCM</option>
            </select>
            <select className="select select-bordered join-item mt-3">
              <option disabled selected>
                Quận/Huyện
              </option>
              <option>Hải Châu</option>
              <option>Cẩm Lệ</option>
              <option>Ngũ Hành Sơn</option>
            </select>
            <select className="select select-bordered join-item mt-3">
              <option disabled selected>
                Phường/Xã
              </option>
              <option>Thanh Bình</option>
              <option>Thạch Thang</option>
              <option>Nam Dương</option>
            </select>
          </div>
        </div> */}
        <div className="mt-4">
          <div>
            {isLoadingCategory ? (
              <div className="text-center text-lg">Loading...</div>
            ) : (
              <ListCategory/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorymanage;