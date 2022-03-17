import React, { useContext } from 'react';

import Link from 'next/link';

const categories = [
  { name: 'Web Development', slug: 'react' },
  { name: 'Books', slug: 'books' },
  { name: 'Family', slug: 'family' },
];

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-black'>
              MVK
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((item) => (
          <Link key={item.slug} href={`/category/${item.slug}`} passHref>
            <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
              {item.name}
            </span>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
