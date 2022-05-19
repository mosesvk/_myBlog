import React, { memo } from 'react';
import StarRating from './StarRating';

const CategoryRating = ({
  starsPlot,
  starsCharacter,
  starsPace,
  starsVisual,
}) => {
  // Star maximum
  const maxStars = 5;
  const starsOverall =
    (starsPlot + starsCharacter + starsPace + starsVisual) / 4;

  return (
    <div className='rwd-table'>
      <table className='w-100'>
        <tr>
          <th>Category</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td data-th='Category'>Plot</td>
          <td data-th='Rating'>
            <div className='flex'>
              <StarRating readonly value={starsPlot} size={6} />
              {starsPlot}
            </div>
          </td>
        </tr>
        <tr>
          <td data-th='Category'>Characters</td>
          <td data-th='Rating'>
            <div className='flex'>
              <StarRating readonly value={starsCharacter} size={6} />
              {starsCharacter}
            </div>
          </td>
        </tr>
        <tr>
          <td data-th='Category'>Pace</td>
          <td data-th='Rating'>
            <div className='flex'>
              <StarRating readonly value={starsPace} size={6} />
              {starsPace}
            </div>
          </td>
        </tr>
        <tr>
          <td data-th='Category'>Visual / Sound</td>
          <td data-th='Rating'>
            <div className='flex'>
              <StarRating readonly value={starsVisual} size={6} />
              {starsVisual}
            </div>
          </td>
        </tr>
      </table>

      <div className='w-100 m-5'>
        <h4 className='text-white mx-2'>Overall: </h4>
        <div className='flex'>
          <StarRating readonly value={starsOverall.toFixed(1)} size={6} />
          {starsOverall.toFixed(1)}
        </div>

      </div>
    </div>
  );
};

export default CategoryRating;
