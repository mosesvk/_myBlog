import Image from 'next/image';
import { useRouter } from 'next/router';
import { getReviews } from '../../services/index';

import MainImg from '../../assets/DrawKit Larry Character Illustration/SVG/DrawKit Larry Character Illustration (1).svg';

const Reviews = () => {
  return <div className='h-screen'></div>;
};

export default Reviews;

export async function getStaticProps() {
  const reviews = (await getReviews()) || [];

  return {
    props: { reviews },
  };
}
