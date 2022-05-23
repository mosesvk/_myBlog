import Image from 'next/image';
import Link from 'next/link';
import { IconNewSection } from '@tabler/icons';
import codingBg from '@/images/background/marvelPoster.jpg';
import Carousel from './Carousel';

const MainContent = ({recentPosts}) => {
  return (
    <div className='container'>
      <div className='grid lg:grid-cols-2 my-3'>
        <div className='text-center my-3'>
          <h2>Marvel Studio Reviews/Breakdowns</h2>
          <Link href={`/tags/marvel`} className=''>
            <a className='btn btn-primary mt-5' aria-label='View all posts'>
              <i className='me-2'>
                <IconNewSection size={16} />
              </i>
              View Marvel Content
            </a>
          </Link>
        </div>
      </div>

      <div className='2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10'>
        <Carousel recentPosts={recentPosts} />
      </div>
    </div>
  );
};

export default MainContent;