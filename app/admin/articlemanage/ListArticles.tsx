"use client";
import React, { useState } from 'react'
import ArticleList from './ArticleList';
import { usePostStore } from '@/app/lib/hooks/usePostStore';

const ListArticles = () => {
  const { posts, getAllPosts } = usePostStore();
  const [postsToList, setPostsToList] = useState(posts);

  function getAllPostsToList() {
    setPostsToList(getAllPosts);
  }
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