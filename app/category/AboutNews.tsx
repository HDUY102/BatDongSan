import React from "react";
import NewsItem from "../components/NewsItem";
import { post } from "@prisma/client";
import Link from "next/link";

const AboutNews = ({ postsToList }: { postsToList: post[] }) => {
  return (
    <Link href={'/news'} className="grid grid-cols-3 gap-4">
      {postsToList?.map((post: post) => (
        <NewsItem key={post.idPost} post={post} />
      ))}
    </Link>
  );
};

export default AboutNews;
