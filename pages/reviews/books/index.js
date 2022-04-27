import React from 'react';
import { ReviewCard } from '../../../components';

import {getBooksCategory} from '../../../services';
import {getBookReviews} from '../../../services'

const Books = ({category, reviews}) => {
  console.log(category)
  console.log(reviews)
  return (
    <>
    <div className='flex flex-col justify-center containter'>
      <h1 className='text-3xl font-bold text-center mb-8'>Book Reviews</h1>
      <p className='text-xl italic text-center mb-8'>From Fantasy to Productivity, check out my reviews for these awesome books</p>
    </div>
    <div className='md:flex md:flex-wrap grid-cols-2 justify-center'>
        {reviews.map((review, idx) => (
          <ReviewCard review={review.node} key={idx}/>
        ))}
      </div>
    </>
  );
};

export default Books;

export const getStaticProps = async () => {
  const data = await getBooksCategory();
  const reviews = await getBookReviews();

  return {
    props: {
      category: data.reviewCategories[0],
      reviews: reviews
    }
  }
}
