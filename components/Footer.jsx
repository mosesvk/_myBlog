import React from 'react';

import { FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-stone-800 text-white p-10 flex flex-col md:flex-row justify-around'>
      <div>
        <p>
          &copy; Moses Kaumatule 2022. Hosted with
          <a
            href='https://vercel.com/'
            className='underline underline-offset-2 text-sky-400 hover:text-sky-600 font-normal mx-2'
            target='_blank'
            rel='noreferrer'
          >
            Vercel
          </a>
        </p>
        <p>
          <a
            href='#'
            className='underline underline-offset-2 text-sky-400 hover:text-sky-600 font-normal'
          >
            Privacy Policy
          </a>{' '}
          <a
            href='#'
            className='underline underline-offset-2 text-sky-400 hover:text-sky-600 font-normal'
          >
            Cookie Policy
          </a>
        </p>
      </div>
      <div className='flex flex-row'>
        <a
          href='https://www.linkedin.com/in/mosesvk/'
          className='text-3xl hover:text-blue-400 duration-300'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA'
          className='text-3xl mx-5 hover:text-blue-400 duration-300'
        >
          <FaYoutube />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100004199235959'
          className='text-3xl hover:text-blue-400 duration-300'
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default Footer;
