import React from 'react'
import Image from 'next/image'
import logo from '@/app/img/logo.png'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-cyan-700 text-neutral-content mt-2">
        <aside>
            <Image src={logo} width={60} height={40} className="p-2 ml-3 rounded-full" alt="LOGO"></Image>        
            <p>Dream House Bds.<br/>Providing reliable tech since 2023</p>
        </aside>
        <nav>
            <header className="footer-title">Contact</header> 
            <a className="font-bold">0764792732</a>
            <a className="font-bold">03 Quang Trung, Hải Châu, TP. Đà Nẵng</a>
            <a className="font-bold">abc@gmail.com</a>
        </nav> 
        <nav>
            <header className="footer-title">Quy định</header> 
            <a className="link link-hover">Chính sách bảo mật</a>
            <a className="link link-hover">Giải quyết khiếu nại</a>
            <a className="link link-hover">Điều khoản</a>
        </nav> 
        <nav>
            <header className="footer-title">Hotline <br></br> 0764792732</header>
        </nav>
    </footer>
  )
}

export default Footer