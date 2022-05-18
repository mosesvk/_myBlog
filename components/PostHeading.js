import Link from 'next/link';
import Image from 'next/image';
import { IconCalendarEvent, IconClock } from '@tabler/icons';
import { formatDate } from '@/utils/formatDate';
import { readingTime } from '@/utils/readingTime';


const PostHeading = ({ author, date, image, title, authors, content }) => {
  return (
    <>
      <div className='col-lg-10'>
        <div className='mb-5'>
          <h3 className='h1 mb-4 post-title'>{title}</h3>

          <ul className='card-meta list-inline mb-2'>
            <li className='list-inline-item mt-2'>
              <Link href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}>
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
    </>
  );
};

export default PostHeading;
