"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import IntroDuceImg from '@/app/img/IntroDuceImg.png'
import { FaArrowCircleRight } from "react-icons/fa";
import Link from 'next/link';

const IntroDuce = () => {
  const [hideButton, setHideButton] = useState(false);
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/about') {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  }, []);
  return (
    <section className='grid grid-cols-2 mt-1'>
        <div className='py-12'>
          <h1 className='text-4xl font-semibold'>
            Mọi thứ đều dễ dàng với <span className='text-amber-500'>Dream House</span>
          </h1>
          <p className='my-4 text-gray-500 text-justify text-sm'>
          <b>Dream House</b> là một công ty môi giới bất động sản hàng đầu, chuyên cung cấp dịch vụ chuyên nghiệp và tận tâm để đáp ứng mọi nhu
          cầu của khách hàng. Với đội ngũ nhân viên giàu kinh nghiệm chúng tôi cam kết mang đến cho bạn những cơ hội đầu tư và mua bán nhà đất
          tốt nhất. Hãy để Dream House là đối tác đáng tin cậy trên hành trình chinh phục ước mơ của bạn!
          </p>
          <div className='flex gap-4 text-sm'>
            {!hideButton && (
              <Link href={'/about'}>
                <button className='bg-primary flex gap-2 items-center text-white px-4 py-2 rounded-full'>
                  Learn more
                  <FaArrowCircleRight className='mt-1' />
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className='relative'>
          <Image src={IntroDuceImg} layout='fill' objectFit="contain" alt="Dream House IntroDuce"></Image>
        </div>
    </section>
  )
}

export default IntroDuce