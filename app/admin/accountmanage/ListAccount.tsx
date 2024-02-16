"use client";
import React, { useState } from "react";
import AccountList from "./AccountList";
import { useUserStore } from "@/app/lib/hooks/useUserStore";

const ListAccount = () => {
  const { users } = useUserStore();
  const [userToList] = useState(users);

  const handleDelete = async (id: number) => {
    const response = await fetch(`/admin/accountmanage/api/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Xóa thành công");
      window.location.reload();
    } else {
      console.error("Error deleting user:", response.statusText);
    }
  };
  return (
    <div>
      <AccountList accountToList={userToList} onDelete={handleDelete} />
    </div>
  );
};

export default ListAccount;
