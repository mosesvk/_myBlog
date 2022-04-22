import React from 'react'

const ReviewCategoryCard = () => {

  return (
    <>

    </>
  )
}

export default ReviewCategoryCard

export async function getStaticProps() {
  const ReviewCategories = (await getReviewCategories()) || [];


  return {
    props: { ReviewCategories },
  };
}