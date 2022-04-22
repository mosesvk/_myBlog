import Image from 'next/image';
import { useRouter } from 'next/router';
import { getReviewCategories } from '../../services/index';
import ReviewCard from '../../components/ReviewCard'
import MainImg from '../../assets/DrawKit Larry Character Illustration/SVG/DrawKit Larry Character Illustration (1).svg';

const Reviews = ({reviewCategories}) => {
  
  return <div className='h-screen'>
    {reviewCategories.map((item, idx) => (
      <div key={idx}>
        {item.node.name}
      </div>
    ))}
  </div>;
};

export default Reviews;

export async function getStaticProps() {
  const reviewCategories = (await getReviewCategories()) || [];

  return {
    props: { reviewCategories },
  };
}
