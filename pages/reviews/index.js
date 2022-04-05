import Image from 'next/image'
import { useRouter } from 'next/router';

import MainImg from '../../assets/DrawKit Larry Character Illustration/SVG/DrawKit Larry Character Illustration (1).svg'

const Reviews = () => {

  return (
    <div className='h-screen'>
      
      <div className='mx-auto max-w-4xl mb-8 flex flex-col items-center'>
        <div>
          <Image src={MainImg} alt='contructing image' />
        </div>
        <h1 className='text-3xl mb-8 font-bold pb-4 pt-10 text-center'>
          This section is under Maintenance...
        </h1>
      </div>
    </div>
  )
}

export default Reviews 