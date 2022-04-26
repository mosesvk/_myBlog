import React from 'react';

import {getBooksCategory} from '../../../services';
import {getBookReviews} from '../../../services'

const Books = ({category, reviews}) => {
  console.log(category)
  console.log(reviews)
  return (
    <div className='flex justify-center'>
      <h1 className='text-3xl font-bold'>Book Reviews</h1>
      <div>
        
      </div>
    </div>
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
