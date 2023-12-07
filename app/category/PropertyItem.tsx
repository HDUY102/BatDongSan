import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroDuceImg from '@/app/img/IntroDuceImg.png'
import { property } from '@prisma/client'
const PropertyItem = ({property}:{property:property}) => {
  const formatCurrency = (amount: number): string => {
    if (amount < 1000000000) {
      return `${(amount / 1000000).toFixed(1)} triệu`;
    } else {
      return `${(amount / 1000000000).toFixed(1)} tỷ`;
    }
  };
  return (
    <Link href={`/detailProperty/${property.idProperty}`}>
        <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all h-80'>
            <div className='text-center'>
              <Image className="max-h-auto max-h-24" src={IntroDuceImg} alt="bất động sản"/>
            </div>
            <h4 className='font-semibold text-xl my-3 '>{property?.Title}</h4>
            <p className='text-gray-600 text-sm text-left '>
                {property?.Description}
                <br />
                Giá: {formatCurrency(property?.Price || 0)}
            </p>
            <p className="bg-amber-500 text-white block w-full rounded-full mt-4 px-8 py-2 hover:bg-amber-300" data-tip="Đặt Mua" >
              Đặt mua
            </p>
        </div>
    </Link>
  )
}

export default PropertyItem