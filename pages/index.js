import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import BannerBlock from '@/components/Banner';
import Post from '@/components/Post';
import { getPosts } from '@/libs/getPosts';
import { getAuthors } from '@/libs/getAuthors';
import { getSinglePage } from '@/libs/getSinglePage';
import { IconNewSection } from '@tabler/icons';
import codingBg from '../public/images/background/marvelPoster.jpg';

export default function Home({ authors, posts, banner, apikey }) {
  return (
    <Layout>
      <BannerBlock banner={banner} />

      <div className='row gy-5 gx-4 g-xl-5'>
        <div className='col-xl-4 col-6'>
          <div className='main-image-container'>
            <Image src={codingBg} alt='code' layout='responsive' className={'main-image'} />
          </div>
          <div className=''>
            <Link href={`/tags/marvel`} className=''>
              <a className='btn btn-primary mt-5' aria-label='View all posts'>
                <i className='me-2'>
                  <IconNewSection size={16} />
                </i>
                View Marvel Reviews
              </a>
            </Link>
          </div>

          <div className='col-12 text-center'></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      authors: getAuthors(),
      posts: getPosts().slice(0, 6),
      banner: getSinglePage('content/_index.md'),
    },
  };
}
