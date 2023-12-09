"use client"
import React,{useState} from 'react'
import Link from "next/link";
import HeaderNav from '../components/HeaderNav'
import News from './News'
import Footer from '../components/Footer'
import { post } from "@prisma/client";
import { usePostStore } from '../lib/hooks/usePostStore';

const page = () => {
  const { posts } = usePostStore();
  const [postsToList] = useState(posts);
  return (
    <section>
      <div>
        <News postsToList={postsToList}/>
      </div>
    </section>
    
  )
}

export default page