import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import {graphCMSImageLoader } from '../util'

const ReviewCard = ({review}) => {

  return (
    <div className=' m-4 md:w-2/6 bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <Image
          src={review.image.url}
          alt={review.title}
          className='object-top absolute h-fit w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
          // height={100}
          // width={100}
          layout='fill'
        />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 max-h-fit text-xl font-semibold'>
        <Link href={`/reviews/${review.slug}`}>{review.title}</Link>
      </h1>
      <div className='text-center'>
        <Link href={`/reviews/${review.slug}`} passHref>
          <span className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Read Review
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ReviewCard