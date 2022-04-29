import React from 'react'
import Image from 'next/image'
import blueBg from '../assets/blue-bg.png'

const Hero = () => {
  return (
    <div className='mb-8 '>
      <div className='border-b w-full inline-block border-blue-400 py-8 flex md:flex-row '>
        <div className='text-center'>
          <h1>Hi, I&apos;m Moses</h1>
          <p>Welcome to my Personal Blog</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Hero