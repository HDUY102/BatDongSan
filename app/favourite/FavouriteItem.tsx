
import React from "react";
import Image from "next/image";
import about1 from "@/app/img/about1.jpg";
import heart from "@/app/img/heart.png";

const FavouriteItem = () => {
  return (
    <div>
      <div className="mt-7 pl-8 mb-5 text-2xl font-bold">
        <span>Bất Động sản được yêu thích</span>
      </div>
      <div className="float-left relative inline-block overflow-hidden object-cover group">
        <div className="relative float-left text-center">
          <div className="relative">
            <div>
              <Image
                className="max-w-2 rounded-lg ml-4 mr-0"
                src={about1}
                width={575}
                height={232}
                alt="Dream House IntroDuce"
              />
            </div>
          </div>
        </div>
        <div className="relative float-left text-center">
          <div className="relative">
            <div>
              <Image
                className="max-w-2 rounded-lg ml-2 mr-2"
                src={about1}
                width={280}
                height={232}
                alt="Dream House IntroDuce"
              />
            </div>
          </div>
        </div>
        <div className="relative float-left text-center">
          <div className="relative">
            <div>
              <Image
                className="max-w-2 rounded-lg ml-2 mr-4 mt-2"
                src={about1}
                width={280}
                height={232}
                alt="Dream House IntroDuce"
              />
            </div>
          </div>
        </div>
        <div className="inline-block float-left ml-4 mt-2">
          <span className="text-lg font-bold ">
            Quyết định dừng cuộc chơi. Mặt phố Trần Vỹ - mặt tiền 7m - đơn giá
            305tr/m2
          </span>
          <div className="font-bold flex">
            <span className="value text-base mr-5">16,5 tỷ</span>
            <span className="value text-base mr-5">54 m²</span>
            <span className="value text-base mr-5">3 phòng</span>
            <span className="font-medium leading-6">
              Đường Trần Vỹ, Phường Mai Dịch, Cầu Giấy, Hà Nội
            </span>
            <Image
              className="ml-52"
              src={heart}
              width={25}
              height={20}
              alt="Dream House IntroDuce"
            />
          </div>
          <div>
            <span className="font-normal">
              Danh sách căn hộ bán rẻ nhất tại chung cư Vinhomes Ocean Park cắt
              lỗ từ 200tr - 300tr/căn. Kính gửi tới quý khách thông tin liên
              quan đến căn hộ đang bán tại Vinhomes Ocean Park.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;