"use client";
import React, { useState } from 'react'
import ArticleList from './ArticleList';
import { usePostStore } from '@/app/lib/hooks/usePostStore';

const ListArticles = () => {
  const { posts } = usePostStore();
  const [postsToList] = useState(posts);

  const handleDelete = async (id: number) => {
    const response = await fetch(`/admin/articlemanage/api/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      alert("Xóa thành công")
      window.location.reload();
    } else {
      console.error('Error deleting article:', response.statusText);
    }
  };
    return (
    <div>
        <ArticleList postsToList={postsToList} onDelete={handleDelete} />
    </div>
  )
}

export default ListArticles