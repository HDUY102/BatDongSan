// "use client"
// import React, {  useState } from 'react'
// import SideBar from '../../SideBar'
// import HeaderNavAdmin from '../../HeaderNavAdmin'
// import Link from 'next/link'
// import { useForm } from "react-hook-form";
// import { useRouter } from 'next/navigation';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import 'react-datepicker/dist/react-datepicker.css';

// const UpdateArticle = ({ articles }: { articles: any }) => {
//   const [Content, setContent] = useState('');
//   const router = useRouter();
//   const { register, handleSubmit,formState:{ errors } } = useForm();

//   const categoryMapping  : Record<string, number> ={
//     "Thuê": 1,
//     "Mua": 2,
//     "Bán": 3,
//     "Dự án": 4,
//     "Đất": 5,
//     "Nhà": 6,
//   };
//   const onSubmit = async (data:any) => {
//     const categoryKey: string = data.Category_idCategory;
//     const formValues = {
//       User_idUser: Number.parseInt(data.User_idUser),
//       Category_idCategory:  categoryMapping[categoryKey],
//       Title: data.Title,
//       Content: Content,
//     }
//     console.log(formValues)
//     const respone = await fetch(`http://localhost:3000/admin/articlemanage/updatearticle/api`,{
//       method: 'PUT',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formValues)
//     })

//     if(respone.ok){
//       alert("Chỉnh sửa bài viết thành công")
//       router.push('/admin/articlemanage')
//     }
//     else {
//       console.error('Error during add article:', respone.statusText);
//     }
//   }
  
//   return (
//       <div className='flex '>
//       <div className='max-w-[30%]'>
//         <SideBar />
//       </div>
//       <div>
//         <HeaderNavAdmin/>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h1 className='mt-2 ml-4 font-bold'>Thông tin bài viết</h1>
//           <div className='ml-4 mt-2 flex justify-between'>
//             <div>
//               <h3 className="mt-2">Loại danh mục</h3>
//               <select {...register("Category_idCategory")} className=" mt-2 select select-bordered join-item">
//                 <option value="" disabled selected>Loại bất động sản</option>
//                 <option value="Nhà">Nhà</option>
//                 <option value="Đất">Đất</option>
//                 <option value="Căn hộ">Căn hộ</option>
//                 <option value="Thuê">Thuê</option>
//                 <option value="Bán">Bán</option>
//                 <option value="Dự án">Dự án</option>
//               </select>
//             </div>
//           </div>
//           <div className='flex justify-between ml-3 mt-4 mb-3'>
//             <div>
//               <h3 className="">Tiêu đề</h3>
//               <input {...register("Title")} type="text" placeholder="Tiêu đề" className="input input-bordered  max-w-xs" />
//             </div>
//             <div>
//               <h3 className="text-right">Mã người đăng bài</h3>
//              <input {...register("User_idUser")} type="text" placeholder="Mã người đăng bài" className="input input-bordered  max-w-xs" />
//             </div>
//           </div> 
//           <h3 className='mt-3 ml-4'>Nội dung</h3> 
//           <ReactQuill className="ml-3 mb-3"  theme="snow" value={Content} onChange={(value)=>setContent(value)} />
//           <div className='flex justify-end mb-3'>
//             <Link href={'/admin/articlemanage'}>
//               <button className='hover:text-primary mr-3'>Hủy</button>
//             </Link>
//             <button className='hover:bg-white hover:text-primary hover:border-2' type="submit">Cập nhật</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default UpdateArticle