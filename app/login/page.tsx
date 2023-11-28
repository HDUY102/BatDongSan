import React from 'react'
import gg from '@/app/img/gg.png'
import Image from 'next/image'
const Login = () => {
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-8'>LOGIN</h1>
        <form className='block max-w-xl mx-auto'>
          <input type="text" placeholder="Tên Đăng Nhập" />
          <input type="password" placeholder="Password" />
          <button className='block w-full' type="submit">ĐĂNG NHẬP</button>
          <div className='my-4 text-center text-gray-500'>
            hoặc đăng nhập bằng google
          </div>
          <button className='flex gap-4  w-full justify-center'>
            <Image src={gg} alt='' width={24} height={24}/>
            ĐĂNG NHẬP BẰNG GOOGLE
          </button>
        </form>
        <p className='ml-36 mt-2'>
          Chưa có tài khoản? <a className="hover:text-blue-600" href={'/register'}><u>Đăng Ký</u></a>
        </p>
      <hr className='mt-16'></hr>
      <footer className='boder-t p-8 text-center text-gray-500 mt-4'>
        <i>Dream <span className='text-amber-400'>House</span></i> &copy; 2023 Accompany your dreams
      </footer>
    </section>
  )
}

export default Login