import Link from 'next/link';
import StarRating from '@/components/StarRating';
import { marked } from 'marked';

const PostHeading = ({
  tags,
  categories,
  ratingCharacter,
  ratingPace,
  ratingPlot,
  ratingVisual,
  pros,
  cons,
  content
}) => {
  return (
    <div className='col-lg-8 post-content-block order-0 order-lg-2'>
      {ratingPlot && ratingCharacter && ratingPace && ratingVisual && (
        <StarRating
          starsPlot={ratingPlot}
          starsCharacter={ratingCharacter}
          starsPace={ratingPace}
          starsVisual={ratingVisual}
          pros={pros}
          cons={cons}
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
            <Link href={`/categories/${t.replace(/ /g, '-').toLowerCase()}`}>
              <a className='bg-white'>{t}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul className='post-meta-tag list-unstyled list-inline my-4'>
        <li className='list-inline-item'>Tags: </li>
        {tags.map((t, i) => (
          <li key={i} className='list-inline-item'>
            <Link href={`/tags/${t.replace(/ /g, '-').toLowerCase()}`}>
              <a className='bg-white'>{t}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostHeading;
