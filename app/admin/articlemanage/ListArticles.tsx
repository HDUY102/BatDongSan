"use client";
import React, { useState } from 'react'
import ArticleList from './ArticleList';

const ListArticles = ({ articles }: { articles: any }) => {
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:3000/admin/articlemanage/api/article/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      alert("Xóa thành công")
      window.location.reload();
    } else {
      console.error('Error deleting article:', response.statusText);
    }
  };
    const [articlesToList] = useState(articles);
    return (
    <div>
        <ArticleList articlesToList={articlesToList} onDelete={handleDelete} />
    </div>
  )
}

export default ListArticles