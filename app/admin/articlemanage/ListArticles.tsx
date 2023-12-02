"use client";
import React, { useState } from 'react'
import ArticleList from './ArticleList';

const ListArticles = ({ articles }: { articles: any }) => {
    const [articlesToList, setArticlesToList] = useState(articles);
    return (
    <div>
        <ArticleList articlesToList={articlesToList}/>
    </div>
  )
}

export default ListArticles