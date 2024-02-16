"use client";
import React, { useEffect } from "react";
import SideBar from "./../SideBar";
import HeaderNavAdmin from "./../HeaderNavAdmin";
import { useUserStore } from "@/app/lib/hooks/useUserStore";
import ListAccount from "./ListAccount";

const Accountmanage = () => {
  const { fetchDataUsers, isLoadingUser } = useUserStore();

  useEffect(() => {
    fetchDataUsers();
  }, []);

  return (
    <div className="flex ">
      <div className="max-w-[30%]">
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin />
        <div className="flex justify-between">
          <h1 className="mt-2 ml-4 font-bold">Quản Lý Tài Khoản</h1>
        </div>
        <div className="mt-4">
          <div>
            {isLoadingUser ? (
              <div className="text-center text-lg">Loading...</div>
            ) : (
              <ListAccount/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountmanage;