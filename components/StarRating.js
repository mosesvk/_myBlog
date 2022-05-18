import './StarRating'
import cn from 'classnames';

const Rating = ({ size, value, hasValueLabel = true }) => {

  return (
    <div className="rating-container" title={value}>
      <div
        className={cn("rating", size)}
        style={{ "--value": value }}
      />
      {hasValueLabel && (
        <span className="rating-value">{value}</span>
      )}
    </div>
  );
};

const StarRating = ({
  starsPlot,
  starsCharacter,
  starsPace,
  starsVisual,
  pros,
  cons,
}) => {
  // Star maximum
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
          <td data-th='Category' className='bold'>
            Plot
          </td>
          <td data-th='Rating'>
            <Rating value={starsPlot} color="gold" />
          </td>
        </tr>
        <tr>
          <td data-th='Category' className='bold'>
            Characters
          </td>
          <td data-th='Rating'>
            <Rating value={starsCharacter} color="gold" />
          </td>
        </tr>
        <tr>
          <td data-th='Category' className='bold'>
            Pace
          </td>
          <td data-th='Rating'>
          <Rating value={starsPace} color="gold" />
          </td>
        </tr>
        <tr>
          <td data-th='Category' className='bold'>
            Visual / Sound
          </td>
          <td data-th='Rating'>
          <Rating value={starsVisual} color="gold" />
          </td>
        </tr>
      </table>

      <div className='w-100 mx-4 my-3'>
        <h4 className='text-white mx-2'>OVERALL: </h4>
        <Rating value={starsOverall.toFixed(1)} color="gold" />
      </div>
    </div>
  );
};

export default StarRating;
