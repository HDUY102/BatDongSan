"use client"
import React, {  useEffect,useState } from 'react'
import SideBar from '../../../SideBar'
import HeaderNavAdmin from '../../../HeaderNavAdmin'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useParams, useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
import { usePostStore } from '@/app/lib/hooks/usePostStore'

const UpdateArticle = () => {
  const [Content, setContent] = useState('');
  const router = useRouter();
  const { register, handleSubmit,setValue,formState:{ errors } } = useForm();
  const { id } = useParams();
  const idPost = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);
  const categoryMapping  : Record<number, string> ={
    1:"Thuê",
    2:"Căn hộ",
    3:"Bán",
    4:"Dự án",
    5:"Đất",
    6:"Nhà",
    9: "Quảng Cáo"
  };
  const userMapping  : Record<number, string> ={
    1:"admin",
    2:"Duy",
    3:"Huy",
    4:"Hậu",
    5:"aaad",
    6:"Hello",
    7:"Thắng"    
  };
  const post = usePostStore.getState().getPostById(idPost)[0];

  useEffect(() => {
    usePostStore.getState().fetchDataPosts();
    if (post) {
      setValue("Category_idCategory", post.Category_idCategory);
      setValue("Title", post.Title);
      setValue("User_idUser", userMapping[post.User_idUser]);
      setContent(post.Content || '');
    }
  }, [idPost]);

  const onSubmit = async (data:any) => {
    const categoryToIdMapping  : Record<string, number> ={
      "Thuê": 1,
      "Căn hộ": 2,
      "Bán": 3,
      "Dự án": 4,
      "Đất": 5,
      "Nhà": 6,
      "Quảng Cáo":9
    };
    const userMapping  : Record<string, number> ={
      "admin": 1,
      "Duy": 2,
      "Huy": 3,
      "Hậu": 4,
      "aaad": 5,
      "Hello": 6,
      "Thắng": 7    
    };
    const categoryKey: string = data.Category_idCategory ;
    const userKey: string = data.User_idUser;
    const formValues = {
      User_idUser: userMapping[userKey],
      Category_idCategory:  categoryToIdMapping[categoryKey] || parseInt(categoryKey),
      Title: data.Title,
      Content: Content,
    }
    console.log(formValues)
    const respone = await fetch(`http://localhost:3000/api/article/update/${idPost}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })

    if(respone.ok){
      alert("Chỉnh sửa bài viết thành công")
      router.push('/admin/articlemanage')
    }
    else {
      console.error('Error during add article:', respone.statusText);
    }
  }
  
  return (
      <div className='flex '>
      <div className='max-w-[30%]'>
        <SideBar />
      </div>
      <div>
        <HeaderNavAdmin/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='mt-2 ml-4 font-bold'>Thông tin bài viết</h1>
          <div className='ml-4 mt-2 flex justify-between'>
            <div>
              <h3 className="mt-2">Loại danh mục</h3>
              <select {...register("Category_idCategory")} defaultValue={post ? post.Category_idCategory : ""} className=" mt-2 select select-bordered join-item">
                <option value="" disabled selected>Loại bất động sản</option>
                {Object.entries(categoryMapping).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex justify-between ml-3 mt-4 mb-3'>
            <div>
              <h3 className="">Tiêu đề</h3>
              <input {...register("Title")} defaultValue={post && post.Title ? post.Title  : ""} type="text" placeholder="Tiêu đề" className="input input-bordered  max-w-xs" />
            </div>
            <div>
              <h3 className="text-right">Tên người đăng bài</h3>
             <input {...register("User_idUser")}  defaultValue={post ? userMapping[post.User_idUser] : ""}  type="text" placeholder="Tên người đăng bài" className="input input-bordered text-right max-w-xs" />
            </div>
          </div> 
          <h3 className='mt-3 ml-4'>Nội dung</h3> 
          <ReactQuill className="ml-3 mb-3"  theme="snow" value={Content} onChange={(value)=>setContent(value)} />
          <div className='flex justify-end mb-3'>
            <Link href={'/admin/articlemanage'}>
              <button className='hover:text-primary mr-3'>Hủy</button>
            </Link>
            <button className='hover:bg-white hover:text-primary hover:border-2' type="submit">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateArticle