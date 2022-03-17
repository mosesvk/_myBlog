import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';


import { getHeaders } from '../services';

const Header = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    getHeaders().then((newHeaders) => {
      setHeaders(newHeaders);
      console.log(newHeaders);
    });
  }, []);

  const logo = '< MVK />';

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/' passHref>
            <span className='cursor-pointer font-bold text-4xl text-black'>
              {logo}
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {headers.map((item) => (
            <Link
              key={item.node.slug}
              href={`/category/${item.node.slug}`}
              passHref
            >
              <span className='md:float-right mt-2 align-middle text-black hover:text-blue-600 active:text-blue-700 ml-4 font-semibold cursor-pointer transition duration-500 ease transform hover:-translate-y-1'>
                {item.node.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
