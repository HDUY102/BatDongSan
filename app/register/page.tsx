import React from 'react'
import gg from '@/app/img/gg.png'
import Image from 'next/image'
const Register = () => {
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-8'>REGISTER</h1>
        <form className='block max-w-xl mx-auto'>
          <input type="text" placeholder="Tên Đăng Nhập" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">ĐĂNG KÝ</button>
          <div className='my-4 text-center text-gray-500'>
            hoặc đăng ký bằng google
          </div>
          <button className='flex gap-4 justify-center'>
            <Image src={gg} alt='' width={24} height={24}/>
            ĐĂNG KÝ BẰNG GOOGLE
          </button>
        </form>
        <p className='ml-36 mt-2'>
          Đã có tài khoản? <a className="hover:text-blue-600" href=''><u>Đăng Nhập</u></a>
        </p>
      <hr className='mt-16'></hr>
      <footer className='boder-t p-8 text-center text-gray-500 mt-4'>
        <i>Dream <span className='text-amber-400'>House</span></i> &copy; 2023 Accompany your dreams
      </footer>
    </section>
  )
}

export default Register