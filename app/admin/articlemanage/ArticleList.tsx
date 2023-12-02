import React from 'react'
import ArticleItem from './ArticleItem'
import { Post } from '@prisma/client'

const ArticleList = ({articlesToList}:{articlesToList:Post[]}) => {
  return (
        <div className="ml-3 border-2">
          <table className="table">
          <thead>
                <tr>
                  <th>STT</th>
                  <th>Tiêu đề</th>
                  <th>Ngày đăng</th>
                  <th>Nội dung</th>
                </tr>
            </thead>
          </table>
          {articlesToList.map((article:Post)=>(
            <ArticleItem key={article.idPost} article={article}/>
        ))}
        </div>
  )
}

export default ArticleList