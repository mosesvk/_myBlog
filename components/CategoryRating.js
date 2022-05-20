import React, { memo } from 'react';
import StarRating from './StarRating';

const CategoryRating = ({
  starsPlot,
  starsCharacter,
  starsPace,
  starsVisual,
  pros, 
  cons,
}) => {
  // Star maximum
  const maxStars = 5;
  const starsOverall =
    (starsPlot + starsCharacter + starsPace + starsVisual) / 4;

  return (
    <div className='rwd-table'>
      <div className='m-2 font-weight-bold row '>
        <div className='p-2 col-md text-green'>
          <h5 className='m-0 bold'>HIGHLIGHTS:</h5>
          <ul>
            {pros.map((proItem, idx) => {
              if (proItem != '') {
                return (
                  <li className='py-1 bold' key={idx}>
                    {proItem}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className='p-2 col-md text-red'>
          <h5 className='m-0 bold'>LOWLIGHTS:</h5>
          <ul>
            {cons.map((conItem, idx) => {
              if (conItem != '') {
                return (
                  <li className='py-1 bold' key={idx}>
                    {conItem}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
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
