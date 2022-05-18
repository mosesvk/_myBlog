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
<<<<<<< HEAD
}) => {
=======
}) {
>>>>>>> main
  // Star maximum
  const starsOverall =
    (starsPlot + starsCharacter + starsPace + starsVisual) / 4;
  console.log(pros);

<<<<<<< HEAD
=======
  // Get the entire value
  const starPlotPercentage = (starsPlot / maxStars) * 100;
  const starCharacterPercentage = (starsCharacter / maxStars) * 100;
  const starPacePercentage = (starsPace / maxStars) * 100;
  const starVisualPercentage = (starsVisual / maxStars) * 100;
  const starsOverallPercentage = (starsOverall / maxStars) * 100;

  // Round the percentage
  const starPlotPercentageRounded = Math.round(starPlotPercentage);
  const starCharacterPercentageRounded = Math.round(starCharacterPercentage);
  const starPacePercentageRounded = Math.round(starPacePercentage);
  const starVisualPercentageRounded = Math.round(starVisualPercentage);
  const starOverallPercentageRounded = Math.round(starsOverallPercentage);

  const starsPlotHandler = () => {
    return {
      width: starPlotPercentageRounded + '%',
    };
  };

  const starsCharacterHandler = () => {
    return {
      width: starCharacterPercentageRounded + '%',
    };
  };

  const starsPaceHandler = () => {
    return {
      width: starPacePercentageRounded + '%',
    };
  };

  const starsVisualHandler = () => {
    return {
      width: starVisualPercentageRounded + '%',
    };
  };

  const starsOverallHandler = () => {
    return {
      width: starOverallPercentageRounded + '%',
    };
  };
>>>>>>> main

  return (
    <div className='rwd-table'>
      <div className='m-2 font-weight-bold row '>
        <div className='p-2 col-md text-green'>
          <h5 className='m-0 bold'>HIGHLIGHTS:</h5>
          <ul>
            {pros.map((proItem, idx) => {
<<<<<<< HEAD
              if (proItem != '') {
                return (
                  <li className='py-1 bold' key={idx}>
                    {proItem}
                  </li>
                );
=======
              if (proItem != "") {
                return <li className='py-1 bold' key={idx}>{proItem}</li>
>>>>>>> main
              }
            })}
          </ul>
        </div>
        <div className='p-2 col-md text-red'>
          <h5 className='m-0 bold'>LOWLIGHTS:</h5>
          <ul>
            {cons.map((conItem, idx) => {
<<<<<<< HEAD
              if (conItem != '') {
                return (
                  <li className='py-1 bold' key={idx}>
                    {conItem}
                  </li>
                );
=======
              if (conItem != "") {
                return <li className='py-1 bold' key={idx}>{conItem}</li>
>>>>>>> main
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
<<<<<<< HEAD
          <td data-th='Category' className='bold'>
            Plot
          </td>
=======
          <td data-th='Category' className='bold'>Plot</td>
>>>>>>> main
          <td data-th='Rating'>
            <Rating value={starsPlot} color="gold" />
          </td>
        </tr>
        <tr>
<<<<<<< HEAD
          <td data-th='Category' className='bold'>
            Characters
          </td>
=======
          <td data-th='Category' className='bold'>Characters</td>
>>>>>>> main
          <td data-th='Rating'>
            <Rating value={starsCharacter} color="gold" />
          </td>
        </tr>
        <tr>
<<<<<<< HEAD
          <td data-th='Category' className='bold'>
            Pace
          </td>
=======
          <td data-th='Category' className='bold'>Pace</td>
>>>>>>> main
          <td data-th='Rating'>
          <Rating value={starsPace} color="gold" />
          </td>
        </tr>
        <tr>
<<<<<<< HEAD
          <td data-th='Category' className='bold'>
            Visual / Sound
          </td>
=======
          <td data-th='Category' className='bold'>Visual / Sound</td>
>>>>>>> main
          <td data-th='Rating'>
          <Rating value={starsVisual} color="gold" />
          </td>
        </tr>
      </table>

      <div className='w-100 mx-4 my-3'>
        <h4 className='text-white mx-2'>OVERALL: </h4>
<<<<<<< HEAD
        <Rating value={starsOverall.toFixed(1)} color="gold" />
=======
        <div id='overallStars'  className='stars-gray mx-2'>
          <div className='stars-yellow' style={starsOverallHandler()}></div>
        </div>
        {starsOverall.toFixed(1)}
>>>>>>> main
      </div>
    </div>
  );
};

export default StarRating;
