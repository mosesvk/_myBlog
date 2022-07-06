import Image from 'next/image';
import Link from 'next/link';
import { IconNewSection } from '@tabler/icons';
import Carousel from './Carousel';

const MainContent = ({ recentPosts }) => {
  return (
    <div className='container'>
      <div className='my-3'>
        <div className='text-center my-3 w-full'>
          <h2 class='text-3xl mb-4'>Recent Article Posts</h2>
          <Carousel recentPosts={recentPosts} />
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
    </div>
  );
};

export default MainContent;
