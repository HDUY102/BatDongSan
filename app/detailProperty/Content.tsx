"use client"
import { property } from "@prisma/client";
import React,{useEffect} from "react";
import { useParams} from 'next/navigation';
import { usePropertyStore } from "../lib/hooks/usePropertyStore";

const Content = () => {
  const { id } = useParams();
  const idProperty = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);
  console.log(idProperty)
  const property = usePropertyStore.getState().getPropertyById(idProperty)[0];
  const formatCurrency = (amount: number): string => {
    if (amount < 1000000000) {
      return `${(amount / 1000000).toFixed(1)} triệu`;
    } else {
      return `${(amount / 1000000000).toFixed(1)} tỷ`;
    }
  };
  
  return (
    <div>
      <div className="mt-1 ml-4 font-bold">
        <h1 id="Title" className="text-2xl">
          {property?.Title}
        </h1>
        <h6 id="Address" className="font-medium leading-10">
          Địa Chỉ: {property?.Address}
        </h6>
        <div className="row mt-6 mb-24 flex justify-evenly text-center">
          <div className="flex flex-col float-left pl-10">
            <span className="title font-medium leading-5">Mức giá</span>
            <span className="value text-2xl">{formatCurrency(property?.Price || 0)}</span>
          </div>
          <div className=" flex flex-col float-left pl-12">
            <span className="title font-medium leading-5">Diện tích</span>
            <span className="value text-2xl">{property?.Area}</span>
          </div>
          <div className="flex flex-col float-left pl-12">
            <span className="title font-normal leading-5">Phòng</span>
            <span className="value text-2xl">{property?.NumberRoom}</span>
          </div>
        </div>
        <div className="row ">
          <span className="font-bold text-xl">Thông tin mô tả</span>
          <p id="Description" className="font-normal mb-2">
            {property?.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;