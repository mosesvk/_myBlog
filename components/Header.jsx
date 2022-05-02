import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import { getHeaders } from '../services';

const Header = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    getHeaders().then((newHeaders) => {
      setHeaders(newHeaders);
      // console.log(newHeaders);
    });
  }, []);

  const logo = '< MVK />';

  return (
    <div className=' mx-auto px-10 mb-8'>
      <div className=''>
        <div className='md:float-left block'>
          <Link href='/' passHref>
            <span className='cursor-pointer font-bold text-4xl text-black'>
              {logo}
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          <Link href={`https://moseskaumatule.com`} passHref>
            <span className='md:float-right mt-2 align-middle text-black hover:text-blue-600 active:text-blue-700 ml-4 font-semibold cursor-pointer transition duration-500 ease transform hover:-translate-y-1'>
              Portfolio
            </span>
          </Link>
          <Link href={`/reviews`} passHref>
            <span className='md:float-right mt-2 align-middle text-black hover:text-blue-600 active:text-blue-700 ml-4 font-semibold cursor-pointer transition duration-500 ease transform hover:-translate-y-1'>
              Reviews
            </span>
          </Link>
          <Link href={`/post`} passHref>
            <span className='md:float-right mt-2 align-middle text-black hover:text-blue-600 active:text-blue-700 ml-4 font-semibold cursor-pointer transition duration-500 ease transform hover:-translate-y-1'>
              Articles
            </span>
          </Link>         
          <Link href={`/about`} passHref>
            <span className='md:float-right mt-2 align-middle text-black hover:text-blue-600 active:text-blue-700 ml-4 font-semibold cursor-pointer transition duration-500 ease transform hover:-translate-y-1'>
              About
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
