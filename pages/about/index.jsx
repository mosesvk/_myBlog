import React from 'react';
import Image from 'next/image';

import aboutImg from '../../assets/about-img.svg';

const About = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-4xl mb-8 flex flex-col items-center	'>
        <div className='w-2/5 '>
          <Image src={aboutImg} alt='about-img' />
        </div>
        <h1 className='text-3xl mb-8 font-bold pb-4 pt-10 text-center'>
          About Me
        </h1>
        <p className='text-2xl px-28 pb-10 text-center'>
          a Husband, Father and Software Engineer who wants to record my
          thoughts and opinions on Family, Coding, Music & Entertainment
        </p>
        <hr className='border-4 w-44 rounded border-blue-600 ' />
      </div>
      <div className='bg-gray-100 p-10'>
        <h2 className='text-3xl'>What Im about</h2>
      </div>
    </div>
  );
};

export default About;
