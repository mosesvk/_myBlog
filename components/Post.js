import Link from 'next/link';
import Image from 'next/image';

export default function Post({
  post: {
    slug,
    frontMatter: { title, image },
  },
  val,
}) {


  return (
    <>
      <article className='card post-card h-100 border-0 bg-transparent'>
        <div className={val == 'carousel' ? 'w-full' : ''}>
          <Link href={`/blog/${slug}`}>
            <a className='d-block' title={title}>
              <div className={`post-image position-relative`}>
                <Image
                  className='rounded'
                  src={image}
                  alt={title}
                  width={`1000`}
                  height={`800`}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={image}
                />
              </div>
            </a>
          </Link>

          <Link href={`/blog/${slug}`}>
            <a className='d-block' title={title}>
              <h3 className='post-title mb-3'>{title}</h3>
            </a>
          </Link>
        </div>
      </article>
    </>
  );
}
