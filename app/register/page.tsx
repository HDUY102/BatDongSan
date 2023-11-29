import React from 'react'
import gg from '@/app/img/gg.png'
import Image from 'next/image'
import HeaderNav from '../components/HeaderNav'
const Register = () => {
  return (
    <section>
        <HeaderNav/>
        <div className='mt-24'>
          <h1 className='text-center text-primary text-4xl mb-8'>REGISTER</h1>
          <form className='block max-w-xl mx-auto'>
            <input type="text" placeholder="Tên Đăng Nhập" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="block w-full" type="submit">ĐĂNG KÝ</button>
          </form>
          <p className='ml-36 mt-2'>
            Đã có tài khoản? <a className="hover:text-blue-600" href={'/login'}><u>Đăng Nhập</u></a>
          </p>
        </div>
      <hr className='mt-16'></hr>
      <footer className='boder-t p-8 text-center text-gray-500 mt-4'>
        <i>Dream <span className='text-amber-400'>House</span></i> &copy; 2023 Accompany your dreams
      </footer>
    </section>
  )
}

export default Register