import React from 'react'
import IntroDuce from '../components/IntroDuce'
import Image from 'next/image'
import about from '@/app/img/about.jpg'
import Footer from '../components/Footer'
import HeaderNav from '../components/HeaderNav'
const About = () => {
  return (
    <section>
        <HeaderNav/>
        <IntroDuce/>
        <div  className='mt-8 text-center'>
            <div className="text-center">
                <h3 className='uppercase leading-4 text-gray-500 font-semibold'>About</h3>
                <h2 className='text-primary font-bold text-4xl italic'>Dream House</h2>
            </div>
            <div className='text-gray-500 max-w-md mx-auto mt-8 flex flex-col gap-4'>
                <Image  className="mt-auto max-h-40 mb-4  " src={about} layout='fill' objectFit="contain" alt="About Image"></Image>
                <p className='left-0 right-0 mt-52 text-justify'>
                    Dream House là một công ty môi giới bất động sản hàng đầu, chuyên cung cấp các dịch vụ tư vấn và môi giới chuyên 
                    nghiệp để giúp khách hàng đạt được ước mơ sở hữu ngôi nhà hoàn hảo của mình. Với đội ngũ nhân viên giàu kinh nghiệm và 
                    tận tâm, chúng tôi cam kết mang đến trải nghiệm mua bán nhà mượt mà và hiệu quả. Dream House không chỉ đơn thuần là một 
                    đơn vị môi giới bất động sản, mà còn là đối tác đáng tin cậy cho những người đang tìm kiếm không gian sống lý tưởng. 
                    Chúng tôi hiểu rằng mỗi căn nhà là một câu chuyện riêng biệt, và chúng tôi luôn lắng nghe, tìm hiểu về mong muốn và nhu cầu của 
                    khách hàng để tạo nên những giao dịch thành công và bền vững. Với sự hiểu biết sâu sắc về thị trường bất động sản và khả 
                    năng đàm phán tốt, Dream House tự hào là đối tác lý tưởng cho cả người mua và người bán. Chúng tôi cam kết không ngừng nỗ 
                    lực để mang lại giá trị tốt nhất cho khách hàng và xây dựng mối quan hệ lâu dài dựa trên sự chuyên nghiệp, trung thực và minh bạch.
                    Cho dù bạn đang tìm kiếm một căn nhà mới để định cư hoặc đầu tư, Dream House là đối tác đáng tin cậy để hỗ trợ bạn trên mọi bước
                    đường của hành trình bất động sản.
                </p>
            </div>
            <hr className='mt-8'/>
            <div className="text-center mt-8">
                <h3 className='uppercase leading-4 text-gray-500 font-semibold'>Contact Us</h3>
                <h2 className='text-primary font-bold text-3xl italic'>DREAM HOUSE</h2>
            </div>
            <a className="text-3xl" href='tel:+84.764.792.732'>+84.764.792.732</a>
            <hr className='mb-4'/>
        </div>
        <Footer/>
    </section>
  )
}

export default About