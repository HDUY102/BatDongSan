import React from 'react'
import Link from 'next/link'

const ArticleItem = ({ article, onDelete }: { article: any; onDelete: (id: number) => void }) => {
  const handleDelete = () => {
    const shouldDelete = window.confirm('Bạn thực sự muốn xóa?');
    if (shouldDelete) {
      onDelete(article.idPost);
    }
  };
  return (
            <table className=" w-[100%]">
              <tbody>
                <tr className='border-b-2 table table-fixed'>
                  <td>{article.idPost}</td>
                  <td>{article.Title}</td>
                  <td>{article.Date?.toString()}</td>
                  <td>{article.Content}</td>
                  <td className='text-white flex '>
                    <button onClick={handleDelete} className="text-red-400 border-none w-5 hover:text-red-500">Xóa</button>
                    {/* <Link href={'/admin/articlemanage/updatearticle'}>
                      <button className="text-green-400 border-none hover:text-green-500">Sửa</button>
                    </Link> */}
                    <Link href={`/admin/articlemanage/updatearticle`}>
                      <button className="text-green-400 border-none hover:text-green-500">Sửa</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
  )
}

export default ArticleItem