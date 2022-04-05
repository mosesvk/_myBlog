import React from 'react';
import Image from 'next/image';

import aboutImg from '../../assets/about-img.svg';

const About = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-4xl mb-8 flex flex-col items-center'>
        <div className='w-2/5 '>
          <Image src={aboutImg} alt='about-img' />
        </div>
        <h1 className='text-3xl mb-8 font-bold pb-4 pt-10 text-center'>
          About Me
        </h1>
        <p className='text-2xl px-28 pb-10 text-center'>
          Husband, Father, & Coder. Love sports, books, games, and anime.
        </p>
        <hr className='border-4 w-44 rounded border-blue-600 ' />
      </div>
      <div className='bg-gray-100 py-12'>
        <div className='mx-auto max-w-xl mb-8 flex flex-col'>
          <h2 className='text-xl font-bold text-left pb-2'>What Im about</h2>
          <ol className='list-decimal font-light text-l leading-relaxed'>
            <li>👨‍👩‍👧‍👦 Married to the Love of my life and have two wonderful children. Check out my articles about fatherhood</li>
            <li>💻 I work a Software Engineer & Freelance developer in Utah. My journey to coding is not uncommon but I hope to provide help and insight to those choosing a similar path</li>
            <li>My favorite hobbies are 👺 watching anime, 🎹 playing piano, 📚 reading, and 🎮 playing video games. I share plenty of suggestions and opinions on which ones you should check out</li>
          </ol>
          <h2 className='text-xl font-bold text-left pt-5 pb-2'>Get In Touch</h2>
          <ol className='list-decimal font-light text-l leading-relaxed'>
            <li>🔗 <a href='https://www.linkedin.com/in/mosesvk/' className='underline text-sky-600 hover:text-sky-800 font-normal'><strong>LinkedIn</strong></a> - For a quick chat feel free to reach out through LinkedIn. I will respond within a day.</li>
            <li>📧 <a href='mailto:kaumatule93@gmail.com' className='underline text-sky-600 hover:text-sky-800 font-normal'><strong>Email</strong></a> - For a longer thing, or if you dont have LinkedIn, please reach out via email. </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
