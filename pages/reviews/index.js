import Image from 'next/image';
import { useRouter } from 'next/router';
import { getReviewCategories } from '../../services/index';
import ReviewCategoryCard from '../../components/ReviewCategoryCard';
// import MainImg from '../../assets/DrawKit Larry Character Illustration/SVG/DrawKit Larry Character Illustration (1).svg';

const Reviews = ({reviewCategories}) => {
  console.log(reviewCategories)
  
  return <div className='h-screen'>
    {/* {reviewCategories.map((item, idx) => (
      <ReviewCategoryCard key={idx} reviewCategory={item} />
    ))} */}
  </div>;
};

export default Reviews;

export async function getStaticProps() {
  const reviewCategories = (await getReviewCategories()) || [];

  return {
    props: { reviewCategories },
  };
}
