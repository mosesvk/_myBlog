export default function StarRating({
  starsPlot,
  starsCharacter,
  starsPace,
  starsVisual,
}) {
  // Star maximum
  const maxStars = 5;
  const starsOverall =
    (starsPlot + starsCharacter + starsPace + starsVisual) / 4;

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
  const starOverallPercentageRounded = Math.round(starsOverallPercentage)

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
            <div className='stars-gray mx-2'>
              <div className='stars-yellow' style={starsPlotHandler()}></div>
            </div>
            {starsPlot}
          </td>
        </tr>
        <tr>
          <td data-th='Category'>Characters</td>
          <td data-th='Rating'>
            {' '}
            <div className='stars-gray mx-2'>
              <div
                className='stars-yellow'
                style={starsCharacterHandler()}
              ></div>
            </div>
            {starsCharacter}
          </td>
        </tr>
        <tr>
          <td data-th='Category'>Pace</td>
          <td data-th='Rating'>
            <div className='stars-gray mx-2'>
              <div className='stars-yellow' style={starsPaceHandler()}></div>
            </div>
            {starsPace}
          </td>
        </tr>
        <tr>
          <td data-th='Category'>Visual / Sound</td>
          <td data-th='Rating'>
            <div className='stars-gray mx-2'>
              <div className='stars-yellow' style={starsVisualHandler()}></div>
            </div>
            {starsVisual}
          </td>
        </tr>
      </table>

      <div className='w-100 m-5'>
        <h4 className='text-white mx-2'>Overall: </h4>
        <div className='stars-gray mx-2'>
          <div className='stars-yellow' style={starsOverallHandler()}></div>
        </div>
        {starsOverall.toFixed(1)}
      </div>

    </div>
  );
}
