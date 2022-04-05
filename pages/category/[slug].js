import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

import MainImg from '../../assets/DrawKit Larry Character Illustration/SVG/DrawKit Larry Character Illustration (1).svg'


const CategoryPost = ({ posts, slug }) => {
  console.log(posts)
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='h-screen'>
      <h1 className='text-3xl text-center font-bold'>{slug} Posts</h1>
      <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            {posts.length > 0 && posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
            {posts.length == 0 && (
              <div className='mx-auto mb-8 flex flex-col-items-center'>
                <div>
                  <Image src={MainImg} alt='contructing image'/>
                </div>
                <h1 className='text-3xl mb-8 font-bold pb-4 pt-10 text-center'>There are no posts for this section yet...</h1>
              </div>        
            )}
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const slug = params.slug;

  return {
    props: { posts, slug },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
