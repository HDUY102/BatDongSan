import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({categoryToList,onDelete,}: {
  categoryToList: any;
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="ml-3 border-2">
      <table className="border-b-2  w-[100%] table table-fixed">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Danh Mục</th>
            <th></th>
          </tr>
        </thead>
      </table>
      {categoryToList.map((category: any) => (
        <CategoryItem
          key={category.idCategory}
          caterory={category}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default CategoryList;