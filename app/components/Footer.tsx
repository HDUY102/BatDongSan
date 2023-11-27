import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-2">
        <nav>
            <header className="footer-title">Contact</header> 
            <a className="font-bold">
                0764792732
                <br></br>
                03 Quang Trung, Hải Châu, TP. Đà Nẵng
                <br></br>
                abc@gmail.com
            </a>
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