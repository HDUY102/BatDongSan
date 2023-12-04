"use client"
import React from 'react'
import HeaderNav from '../components/HeaderNav'
import {z} from "zod";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterSchema = z.object({
  UserName: z.string().min(3,"Username is required").max(255),
  PassWord: z.string().min(3).max(8),
})

const Register = () => {  
    const router = useRouter();
    const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues:{
        UserName: '',
        PassWord: ''
      }
    })

  const onSubmit= async (value: z.infer<typeof RegisterSchema>) => {
    const respone = await fetch("http://localhost:3000/register/api/register",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: value.UserName,
        PassWord: value.PassWord
      })
    })
    if(respone.ok){
      router.push('/login')
    }
    else {
      console.error('Error during registration:', respone.statusText);
    } 
  }
  return (
    // <section {...form}>
      <div >
        <HeaderNav/>
        <div className='mt-24'>
          <h1 className='text-center text-primary text-4xl mb-8'>REGISTER</h1>
          <form className='block max-w-xl mx-auto' onSubmit={form.handleSubmit(onSubmit)}>
            <input type="text" placeholder="UserName" {...form.register("UserName")}/>
            <input type="password" placeholder="Password" {...form.register("PassWord")}/>
            <button className="block w-full hover:border-2 hover:bg-white hover:text-primary" type="submit">ĐĂNG KÝ</button>
          </form>
          <p className='ml-36 mt-2'>
            Đã có tài khoản? <a className="hover:text-blue-600" href={'/login'}><u>Đăng Nhập</u></a>
          </p>
        </div>
      <hr className='mt-16'></hr>
      <footer className='boder-t p-8 text-center text-gray-500 mt-4'>
        <i>Dream <span className='text-amber-400'>House</span></i> &copy; 2023 Accompany your dreams
      </footer>
    </div>
    // </section>
  )
}

export default Register