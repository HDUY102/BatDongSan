import React from "react";

const AccountItem = ({user,onDelete}:{user: any; onDelete: (id: number) => void}) => {
  const handleDelete = () => {
    const shouldDelete = window.confirm("Bạn thực sự muốn xóa tài khoản?");
    if (shouldDelete) {
      onDelete(user.idUser);
    }
  };
  return (
    <table className=" w-[100%]">
      <tbody>
        <tr className="border-b-2 table table-fixed">
          <td>{user.idUser}</td>
          <td>{user.UserName}</td>
          <td>{user.Phone}</td>
          <td>{user.Role}</td>
          <td className="text-white flex ">
            <button onClick={handleDelete}
              className="text-red-400 border-none w-5 hover:text-red-500"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccountItem;
