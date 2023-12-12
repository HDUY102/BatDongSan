"use client"
import React from 'react'
import HeaderNav from '../components/HeaderNav'
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

const handleSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();
    if (success) { 
      router.push("/admin");
      router.refresh();
    } else {
      alert("Login failed");
    }
 };
  return (
    <section>
      <HeaderNav/>
      <div className='mt-24'>
        <h1 className='text-center text-primary text-4xl mb-8'>LOGIN</h1>
          <form onSubmit={handleSubmit} className='block max-w-xl mx-auto'>
            <input type="text" name='username' placeholder="Tên Đăng Nhập" />
            <input type="password" name='password' placeholder="Password" />
            <button className='block w-full' type="submit">ĐĂNG NHẬP</button>
          </form>
          <p className='ml-40 mt-4'>
            Chưa có tài khoản? <a className="hover:text-blue-600" href={'/register'}><u>Đăng Ký</u></a>
          </p>
      </div>
      <hr className='mt-16'></hr>
      <footer className='boder-t p-8 text-center text-gray-500 mt-4'>
        <i>Dream <span className='text-amber-400'>House</span></i> &copy; 2023 Accompany your dreams
      </footer>
    </section>
  )
}

export default Login