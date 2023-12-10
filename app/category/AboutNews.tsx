import React from "react";
import NewsItem from "../components/NewsItem";
import { post } from "@prisma/client";
import Link from "next/link";

const AboutNews = ({ postsToList }: { postsToList: post[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {postsToList?.map((post: post) => (
        <Link key={post.idPost} href={`/news/${post.idPost}`}>
          <NewsItem key={post.idPost} post={post} />
        </Link>
      ))}
    </div>
  );
};

export default AboutNews;
