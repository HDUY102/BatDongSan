"use client";
import React, { useState,useEffect } from "react";
import SideBar from "../../../SideBar";
import Link from "next/link";
import HeaderNavAdmin from "@/app/admin/HeaderNavAdmin";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useCategoryStore } from "@/app/lib/hooks/useCategoryStore";

const AddCategory = () => {
  const { register, handleSubmit, setValue,formState:{ errors } } = useForm();
  const router = useRouter();
  const {id} = useParams()
  const idCategory = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);
  const cate = useCategoryStore.getState().getCategoryById(idCategory)[0];
  
  useEffect(() => {
    useCategoryStore.getState().fetchDataCategory();
    
    if (cate) {
      setValue("categoryName", cate.categoryName)
    }
  }, [idCategory]);

  const onSubmit = async (data:any) => {
    const formValues = {
      idCategory: Number.parseInt(data.idCategory),
      categoryName: data.categoryName,
    };
    console.log(formValues);
    const respone = await fetch(
      `http://localhost:3000/api/category/update/${idCategory}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formValues),
      }
    );

    if (respone.ok) {
      alert("Chỉnh sửa thành công");
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
            <button className='hover:bg-white hover:text-primary hover:border-2' type="submit">Cập nhật</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
