import React from 'react';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.title}
          className="shadow-lg rounded-t-lg lg:rounded-lg"
          layout="fill"
          src={post.featuredImage.url}
        />
      </div> */}
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        {/* <Image
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
        /> */}
      </div> 
    </div>
  );
};

export default PostCard;
