import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({postsToList,onDelete,}: {postsToList: any;onDelete: (id: number) => void}) => {
  return (
    <div className="ml-3 border-2">
      <table className="border-b-2  w-[100%] table table-fixed">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Ngày đăng</th>
            <th>Nội dung</th>
            <th></th>
          </tr>
        </thead>
      </table>
      {postsToList.map((post: any) => (
        <ArticleItem key={post.idPost} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ArticleList;
