import React from 'react'
import ArticleItem from './ArticleItem'
// import { Post } from '@prisma/client'

const ArticleList = ({articlesToList}:{articlesToList:any}) => {
  return (
        <div className="ml-3 border-2">
          <table className="border-collapse w-[100%] table table-fixed">
          <thead className=''>
                <tr>
                  <th>STT</th>
                  <th>Tiêu đề</th>
                  <th>Ngày đăng</th>
                  <th>Nội dung</th>
                  <th></th>
                </tr>
            </thead>
          </table>
          {articlesToList.map((article:any)=>(
            <ArticleItem key={article.idPost} article={article}/>
        ))}
        </div>
  )
}

export default ArticleList