import React from 'react';

import {getBooksCategory} from '../../../services';

const Books = ({category}) => {
  console.log(category)
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Books;

export const getStaticProps = async () => {
  const data = await getBooksCategory();

  return {
    props: {
      category: data.reviewCategories[0]
    }
  }
}
