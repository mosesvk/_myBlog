import Link from 'next/link';
import Image from 'next/image'
import Layout from '@/components/Layout';
import BannerBlock from '@/components/Banner';
import Post from '@/components/Post';
import { getPosts } from '@/libs/getPosts';
import { getAuthors } from '@/libs/getAuthors';
import { getSinglePage } from '@/libs/getSinglePage';
import { IconNewSection } from '@tabler/icons';
import codingBg from '../public/images/background/coding.jpg'

export default function Home({ authors, posts, banner, apikey }) {
  return (
    <Layout>
      <BannerBlock banner={banner} />

      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            {/* <h2 className='section-title'>
              <span>Recent posts</span>
            </h2> */}
          </div>
        </div>
        <div className='row gy-5 gx-4 g-xl-5'>
          <div className='col-lg-6 rounded'>
            <Image src={codingBg} alt='code' layout='responsive'/>
          </div>

          <Link href={`/categories/coding`} className='col-lg-6'>
            <a className='btn btn-primary mt-5' aria-label='View all posts'>
              <i className='me-2'>
                <IconNewSection size={16} />
              </i>
              View Coding Articles
            </a>
          </Link>

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
