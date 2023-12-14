"use client";
import React, { useState } from "react";
import CategoryList from "./CategoryList";
import { useCategoryStore } from "@/app/lib/hooks/useCategoryStore";

const ListCategory = () => {
  const { categories} = useCategoryStore();
  const [categoryToList] = useState(categories);

  const handleDelete = async (id: number) => {
    const response = await fetch(`/admin/categorymanage/api/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Xóa thành công");
      window.location.reload();
    } else {
      console.error("Error deleting category:", response.statusText);
    }
  };
  return (
    <div>
      <CategoryList categoryToList={categoryToList} onDelete={handleDelete} />
    </div>
  );
};

export default ListCategory;
