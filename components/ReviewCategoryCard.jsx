import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ReviewCategoryCard = ({ reviewCategory }) => {
  console.log(reviewCategory);

  return (
    <div className='relative h-72 my-4'>
      <div
        className='absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72'
        style={{ backgroundImage: `url('${reviewCategory.image.url}')` }}
      ></div>
      <div className='absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72'></div>
      <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full hover:flex-row'>
        <p className='text-white mb-4 text-shadow font-bold text-2xl text-center'>
          {reviewCategory.name}
        </p>
        <div className='flex items-center absolute bottom-5 w-full justify-center'>
          <Image
            unoptimized
            alt={reviewCategory.name}
            height='30px'
            width='30px'
            className='align-middle drop-shadow-lg rounded-full'
            src={reviewCategory.image.url}
          />
        </div>
      </div>
      <Link href={`/reviews/${reviewCategory.slug}`} passHref>
        <span className='cursor-pointer absolute w-full h-full' />
      </Link>
    </div>
  );
};

export default ReviewCategoryCard;
