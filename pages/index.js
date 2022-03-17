import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>MVK Blog</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, idx) => (
            <PostCard post={post} key={idx} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: posts,
  };
};
