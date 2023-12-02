import React from 'react'
import Link from 'next/link'
import { Post } from '@prisma/client'

const ArticleItem = ({article}:{article:Post}) => {
  return (
            <table className="table">
              <tbody>
                <tr>
                  <th>{article.idPost}</th>
                  <td>{article.Title}</td>
                  <td>{article.date?.toString()}</td>
                  <td>{article.Content}</td>
                  <th className='text-white flex '>
                    <button className="text-red-500 border-none hover:text-white hover:bg-red-500">Xóa</button>
                    <Link href={'/admin/updatearticle'}>
                      <button className="text-green-500 border-none hover:text-white hover:bg-green-500">Sửa</button>
                    </Link>
                    <button className="text-blue-600 border-none hover:text-white hover:bg-blue-600">Duyệt</button>
                  </th>
                </tr>
              </tbody>
            </table>
  )
}

export default ArticleItem