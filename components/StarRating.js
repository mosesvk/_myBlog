import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const StarRating = ({ value }) => {
  return (
    <>
      <Rating
        name="half-rating-read"
        readOnly
        precision={0.1}
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </>
  );
};

export default StarRating;
