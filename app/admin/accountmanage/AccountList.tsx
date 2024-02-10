import React from "react";
import AccountItem from "./AccountItem";

const AccountList = ({accountToList,onDelete,}: {accountToList: any;onDelete: (id: number) => void}) => {
  return (
    <div className="ml-3 border-2">
      <table className="border-b-2  w-[100%] table table-fixed">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên tài khoản</th>
            <th>Số điện thoại</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
      </table>
      {accountToList.map((user: any) => (
        <AccountItem key={user.idUser} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default AccountList;
