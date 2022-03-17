import React from 'react';
import Image from 'next/image';

import aboutImg from '../../assets/about-img.svg';

const About = () => {
  return (
    <div className='container '>
      <div className='mx-auto px-10 mb-8 flex flex-col items-center	'>
        <div className='w-2/5 '>
          <Image src={aboutImg} alt='about-img' />
        </div>
        <h1 className='text-3xl mb-8 font-bold pb-4 pt-10 text-center'>
          About Me
        </h1>
        <p className='text-l px-10 text-center'>a Husband, Father and Software Engineer who wants to record my thoughts and opinions on Family, Coding, Music & Entertainment</p>
      </div>
      <div className='bg-blue-100 px-20 py-25'>
        <p className='text-l'>Married 5 years to the love of my life. We have 2 wonderful children.</p>
      </div>
    </div>
  );
};

export default About;
