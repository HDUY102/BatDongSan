"use client"
import React from "react";
import Image from "next/image";
import about1 from "@/app/img/about1.jpg";
import DN from "@/app/img/DN.png";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/Footer";
import { usePostStore } from "@/app/lib/hooks/usePostStore";
import { useParams} from 'next/navigation';

const DetailNews = () => {
  const { id } = useParams();
  const idProperty = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);
  const post = usePostStore.getState().getPostById(idProperty)[0];
  return (
    <div>
      <HeaderNav/>
      <h1 id="Title" className="font-bold text-2xl ml-10 mb-1 mt-7">
        {post?.Title}
      </h1>
      <span className="text-xs ml-10 mr-14 font-light mb-6">
        {post?.Date?.toString()}
      </span>
      <div>
        <span className="text-justify flex ml-10 mr-14 font-light mt-3 mb-3" >
          {post?.Content}
        </span>
        <Image
          className="max-w-2 rounded-lg ml-20 mr-4"
          height={232}
          width={720}
          src={about1}
          alt="Dream House IntroDuce"
        ></Image>
      </div>
      <div className="mt-7 mb-20">
        <span className="text-justify flex ml-10 mr-14 font-light mb-3">
          Lên chi phí xây phòng trọ 20m2 ra sao cho hợp lý? Ở các thành phố lớn
          như TP.HCM và Hà Nội, chi phí xây phòng trọ 20m2 thường dao động từ
          khoảng 80 triệu đến 200 triệu đồng, tùy thuộc vào các yếu tố như vật
          liệu, thiết kế, địa điểm, nhân công và chất lượng xây dựng.
        </span>
        <Image
          className="max-w-2 rounded-lg ml-20 mr-4 mb-6"
          height={232}
          width={720}
          src={DN}
          alt="Dream House IntroDuce"
        ></Image>
        <span className="text-justify flex ml-10 mr-14 font-light mb-3">
          Với diện tích 20m2, chủ nhà có thể tính toán việc thể xây nhiều loại
          hình phòng trọ. Dưới đây là một số loại hình mà chủ nhà có thể tham
          khảo:
        </span>
        <span className="text-justify flex ml-12 mr-14 font-light mb-3">
          • Phòng trọ cấp 4 có gác gỗ: Đây là loại phòng trọ đơn giản, tiết kiệm
          chi phí, thích hợp với khu đất rộng để xây nhiều phòng. Phòng trọ có
          diện tích sử dụng khoảng 40m2, bao gồm phòng ngủ, bếp, nhà vệ sinh và
          ban công. Chi phí xây phòng trọ 20m2 cấp 4 có gác gỗ dao động từ 80
          triệu đến 120 triệu đồng.
        </span>
        <span className="text-justify flex ml-10 mr-14 font-light mb-3">
          • Phòng trọ khép kín có gác lửng: Đây là loại phòng trọ cao cấp, có
          chất lượng hạ tầng tốt, dành cho những người có thu nhập cao.
        </span>
        <span className="text-justify flex ml-10 mr-14 font-light">
          • Phòng trọ 2 tầng: Đây là loại phòng trọ đa dạng, có thể xây nhiều
          kiểu phòng khác nhau, từ bình thường đến cao cấp, tùy theo nhu cầu của
          khách hàng. Phòng trọ có diện tích sử dụng khoảng 40m2, bao gồm 2
          tầng, mỗi tầng có phòng ngủ, bếp, nhà vệ sinh và ban công. Chi phí xây
          phòng trọ 20m2 2 tầng dao động từ 200 triệu đến 300 triệu đồng.
        </span>
      </div>
      <Footer/>
    </div>
  );
};

export default DetailNews;