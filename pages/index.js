import Link from 'next/link';
import Layout from '@/components/Layout';
import BannerBlock from '@/components/Banner';
import Post from '@/components/Post';
import { getPosts } from '@/libs/getPosts';
import { getAuthors } from '@/libs/getAuthors';
import { getSinglePage } from '@/libs/getSinglePage';
import { IconNewSection } from '@tabler/icons';

export default function Home({ authors, posts, banner }) {
  return (
    <Layout>
      <BannerBlock banner={banner} />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">
              <span>Recent posts</span>
            </h2>
          </div>
        </div>
        <div className="row gy-5 gx-4 g-xl-5">
          {posts.map((post, i) => (
            <div key={i} className="col-lg-6">
              <Post post={post} authors={authors} />
            </div>
          ))}

          <div className="col-12 text-center">
            <Link href={`/blog`}>
              <a className="btn btn-primary mt-5" aria-label="View all posts">
                <i className="me-2">
                  <IconNewSection size={16} />
                </i>
                View all posts
              </a>
            </Link>
          </div>
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
