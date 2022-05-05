import Image from 'next/image';
import { marked } from 'marked';
import Layout from '@/components/Layout';
import PageHeaderBlock from '@/components/PageHeader';
import Author from '@/components/Author';
import { getAuthors } from '@/libs/getAuthors';
import { getPosts } from '@/libs/getPosts';
import { getSinglePage } from '@/libs/getSinglePage';

export default function About({ authors, posts, about: { frontMatter } }) {
  const allAuthor = posts.map((author) => author.frontMatter.author);
  const postCount = [];
  allAuthor.forEach((x) => {
    postCount[x] = (postCount[x] || 0) + 1;
  });

  return (
    <Layout
      metaTitle={frontMatter.title}
      metaDescription={frontMatter.description}
    >
      <PageHeaderBlock title={frontMatter.title} />

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className='text-dark mb-5' dangerouslySetInnerHTML={{
                  __html: marked.parseInline(frontMatter.intro.title1),
                }}></h1>
              <h2
                className="text-dark mb-0"
                dangerouslySetInnerHTML={{
                  __html: marked.parseInline(frontMatter.intro.title2),
                }}
              ></h2>
            </div>
          </div>

          <div className="py-5 my-3">
            <div className="row g-4 justify-content-center text-center">
              {frontMatter.intro.images.map((item, i) => (
                <div
                  key={i}
                  className={`${item.grid_class} image-grid-${i + 1}`}
                >
                  <Image
                    className="w-100 h-auto rounded"
                    src={item.src}
                    alt="about image"
                    width={item.width}
                    height={item.height}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={item.src}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(frontMatter.intro.description),
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      about: getSinglePage('content/about.md'),
      authors: getAuthors(),
      posts: getPosts(),
    },
  };
}
