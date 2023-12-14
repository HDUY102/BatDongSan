import React from "react";
import Link from "next/link";

const CategoryItem = ({caterory,onDelete}:{caterory: any; onDelete: (id: number) => void}) => {
  const handleDelete = () => {
    const shouldDelete = window.confirm("Bạn thực sự muốn xóa?");
    if (shouldDelete) {
      onDelete(caterory.idCategory);
    }
  };
  return (
    <table className=" w-[100%]">
      <tbody>
        <tr className="border-b-2 table table-fixed">
          <td>{caterory.idCategory}</td>
          <td>{caterory.categoryName}</td>
          <td className="text-white flex ">
            <button onClick={handleDelete}
              className="text-red-400 border-none w-5 hover:text-red-500"
            >
              Xóa
            </button>
            <Link
              href={`/admin/categorymanage/update/${caterory.idCategory}`}>
              <button className="text-green-400 border-none hover:text-green-500">
                Sửa
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CategoryItem;
