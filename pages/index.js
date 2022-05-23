import Layout from '@/components/Layout';
import BannerBlock from '@/components/Banner';
import { getPosts } from '@/libs/getPosts';
// import { getAuthors } from '@/libs/getAuthors';
import { getSinglePage } from '@/libs/getSinglePage';
import MainContent from '@/components/MainContent';

export default function Home({ banner, posts }) {
  return (
    <Layout>
      <BannerBlock banner={banner} />
      <MainContent recentPosts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
      banner: getSinglePage('content/_index.md'),
    },
  };
}
