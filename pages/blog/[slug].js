import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { formatDate } from '@/utils/formatDate';
import { readingTime } from '@/utils/readingTime';
import { getAuthors } from '@/libs/getAuthors';
import { truncateString } from '@/utils/truncateString';
import siteConfig from '@/config/site.config.json';
import useScripts from '@/components/Scripts';
import { Provider, LikeButton } from '@lyket/react';

import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandPinterest,
  IconCalendarEvent,
  IconClock,
  IconArrowUpRight,
} from '@tabler/icons';
import StarRating from '@/components/StarRating';

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
    pros
  },
  authors,
  apiKey,
}) {
  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}blog/${slug}`;
  return (
    <Provider apiKey={apiKey}>
      <Layout metaTitle={title} metaDescription={description} ogImage={image}>
        <section className='section-sm pb-0'>
          <div className='container p-0'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div className='mb-5'>
                  <h3 className='h1 mb-4 post-title'>{title}</h3>

                  <ul className='card-meta list-inline mb-2'>
                    <li className='list-inline-item mt-2'>
                      <Link
                        href={`/author/${author
                          .replace(/ /g, '-')
                          .toLowerCase()}`}
                      >
                        <a className='card-meta-author'>
                          {authors.map((authorPage, i) =>
                            author.replace(/ /g, '-').toLowerCase() ===
                            authorPage.authorSlug ? (
                              <span key={i}>
                                <Image
                                  src={authorPage.authorFrontMatter.image}
                                  alt={author}
                                  width='26'
                                  height='26'
                                  layout='fixed'
                                />
                              </span>
                            ) : (
                              ''
                            )
                          )}
                          <i className='d-inline-block ms-2 ps-1 fst-normal'>
                            by <span>{author}</span>
                          </i>
                        </a>
                      </Link>
                    </li>
                    <li className='list-inline-item mt-2'>—</li>
                    <li className='list-inline-item mt-2'>
                      <i className='me-2'>
                        <IconClock size={18} />
                      </i>
                      <span>{readingTime(content)} min read</span>
                    </li>
                    <li className='list-inline-item mt-2'>—</li>
                    <li className='list-inline-item mt-2'>
                      <i className='me-2'>
                        <IconCalendarEvent size={18} />
                      </i>
                      <span>{formatDate(date)}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='mb-5 text-center post-deatils-image'>
                  <Image
                    className='rounded w-100'
                    src={image}
                    alt={title}
                    width={`1120`}
                    height={`595`}
                    placeholder='blur'
                    blurDataURL={image}
                  />
                </div>
              </div>
              <div className='col-lg-2 post-share-block order-1 order-lg-0 mt-5 mt-lg-0'>
                <div className='position-sticky' style={{ top: 150 + 'px' }}>
                  <span className='d-inline-block mb-3 small'>SHARE</span>
                  <ul className='social-share icon-box'>
                    <li className='d-inline-block d-lg-block me-2 mb-2'>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${title}&url=${pageUrl}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i>
                          <IconBrandTwitter size={18} />
                        </i>
                      </a>
                    </li>
                    <li className='d-inline-block d-lg-block me-2 mb-2'>
                      <a
                        href={`https://www.facebook.com/sharer.php?u=${pageUrl}&quote=${title}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i>
                          <IconBrandFacebook size={18} />
                        </i>
                      </a>
                    </li>
                    <li className='d-inline-block d-lg-block me-2 mb-2'>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i>
                          <IconBrandLinkedin size={18} />
                        </i>
                      </a>
                    </li>
                    <li className='d-inline-block d-lg-block me-2 mb-2'>
                      <a
                        href={`https://www.reddit.com/submit?url=${pageUrl}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i>
                          <IconBrandReddit size={18} />
                        </i>
                      </a>
                    </li>
                    <li className='d-inline-block d-lg-block me-2 mb-2'>
                      <a
                        href={`https://www.pinterest.com/pin/create/button/?&text=${title}&url=${pageUrl}&description=${title}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i>
                          <IconBrandPinterest size={18} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-8 post-content-block order-0 order-lg-2'>
                {/* THIS IS THE CONTENT */}
                {ratingPlot &&
                  ratingCharacter &&
                  ratingPace &&
                  ratingVisual && (
                    <StarRating
                      starsPlot={ratingPlot}
                      starsCharacter={ratingCharacter}
                      starsPace={ratingPace}
                      starsVisual={ratingVisual}
                      pros={pros}
                    />
                  )}
                <div
                  className='content'
                  dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
                ></div>

                <ul className='post-meta-tag list-unstyled list-inline mt-5'>
                  <li className='list-inline-item'>Category: </li>
                  {categories.map((t, i) => (
                    <li key={i} className='list-inline-item'>
                      <Link
                        href={`/categories/${t
                          .replace(/ /g, '-')
                          .toLowerCase()}`}
                      >
                        <a className='bg-white'>{t}</a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className='post-meta-tag list-unstyled list-inline my-4'>
                  <li className='list-inline-item'>Tags: </li>
                  {tags.map((t, i) => (
                    <li key={i} className='list-inline-item'>
                      <Link
                        href={`/tags/${t.replace(/ /g, '-').toLowerCase()}`}
                      >
                        <a className='bg-white'>{t}</a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div>
                  <h5>Give this post a Like!</h5>
                  <LikeButton id='how-to-reduce-footprint' namespace='post' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {useScripts('/js/lightense/lightense.min.js', 'body', true)}
      </Layout>
    </Provider>
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
