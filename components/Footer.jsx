import React from 'react'

import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white p-10 flex flex-row sm:flex-col'>
      <div>
        <p>&copy; Moses Kaumatule 2022. Hosted with <a href='https://vercel.com/' className='underline underline-offset-2 text-sky-400 hover:text-sky-600 font-normal'>Vercel</a></p>
        <p><a href='#' className='underline underline-offset-2 text-sky-400 hover:text-sky-600 font-normal'>Privacy Policy</a> <a href='#' className='underline underline-offset-2 text-sky-400 hover:text-sky-600 font-normal'>Cookie Policy</a></p>
      </div>
      <div className='flex flex-row'>
        <a href='https://www.linkedin.com/in/mosesvk/' className='text-3xl'><FaLinkedinIn/></a>
        <a href='https://www.linkedin.com/in/mosesvk/' className='text-3xl'><FaLinkedinIn/></a>
      </div>
    </div>
  )
}

export default Footer