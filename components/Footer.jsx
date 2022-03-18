import React from 'react'

import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white p-10'>
      <div>
        <p>&copy; Moses Kaumatule 2022. Hosted with vercel</p>
        <p><a>Privacy Policy</a> <a>Cookie Policy</a></p>
      </div>
      <div className='flex flex-col'>
        <a><FaLinkedinIn/></a>
      </div>
    </div>
  )
}

export default Footer