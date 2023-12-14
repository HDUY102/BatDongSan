"use client";

import React, { useState } from "react";
import SideBar from "../../SideBar";
import Link from "next/link";
import HeaderNavAdmin from "../../HeaderNavAdmin";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm();
  const router = useRouter();
  const onSubmit = async (data:any) => {
    const formValues = {
      idCategory: Number.parseInt(data.idCategory),
      categoryName: data.categoryName,
    };
    console.log(formValues);
    const respone = await fetch(
      "http://localhost:3000/api/category/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formValues),
      }
    );

    if (respone.ok) {
      alert("Thêm thành công");
      router.push("/admin/categorymanage");
    } else {
      console.error("Error during add category:", respone.statusText);
    }
  };
  return (
    <div className="flex ">
      <div className="max-w-[30%]">
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin />
        <div className="mt-10 ml-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("categoryName")}
              type="text"
              className="w-screen mx-5"
              placeholder="Vui lòng nhập vào tên danh mục..."
            />
            <div className='flex justify-end mb-3'>
            <Link href={'/admin/categorymanage'}>
              <button className='hover:text-primary mr-3'>Hủy</button>
            </Link>
            <button className='hover:bg-white hover:text-primary hover:border-2' type="submit">Thêm</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
