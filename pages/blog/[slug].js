import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import Sharing from '@/components/Sharing';
import PostHeading from '@/components/PostHeading';
import PostContent from '@/components/PostContent'

import { getAuthors } from '@/libs/getAuthors';
import siteConfig from '@/config/site.config.json';
import useScripts from '@/components/Scripts';

export default function PostPage({
  slug,
  content,
  frontMatter: {
    title,
    author,
    date,
    image,
    description,
    tags,
    categories,
    ratingPlot,
    ratingCharacter,
    ratingPace,
    ratingVisual,
    pros1,
    pros2,
    pros3,
    cons1,
    cons2,
    cons3,
  },
  authors
}) {
  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}blog/${slug}`;
  const pros = [pros1, pros2, pros3];
  const cons = [cons1, cons2, cons3];

  return (
    <Layout metaTitle={title} metaDescription={description} ogImage={image}>
      <section className='section-sm py-5'>
        <div className='container py-0'>
          <div className='row justify-content-center'>

            <PostHeading 
              author={author}
              date={date}
              image={image}
              title={title}
              authors={authors}
              content={content}
            />

            {/* SHARING COMPONENT */}
            <Sharing title={title} pageUrl={pageUrl} />

            <PostContent
              tags={tags}
              categories={categories}
              ratingPlot={ratingPlot}
              ratingCharacter={ratingCharacter}
              ratingPace={ratingPace}
              ratingVisual={ratingVisual}
              pros={pros}
              cons={cons}
              content={content}
            />
          </div>
        </div>
      </section>

      {useScripts('/js/lightense/lightense.min.js', 'body', true)}
    </Layout>
  );
}

export async function getStaticPaths() {
  const blogDirFiles = fs.readdirSync(path.join('content/blog'));
  const blogs = blogDirFiles.filter((f) => f.includes('.md'));

  const paths = blogs.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileContents = fs.readFileSync(
    path.join('content/blog', slug + '.md'),
    'utf8'
  );

  const { data: frontMatter, content } = matter(fileContents);

  return {
    props: {
      slug,
      frontMatter,
      content,
      authors: getAuthors(),
      apiKey: process.env.LYKET_PUBLIC_TOKEN,
    },
  };
}
