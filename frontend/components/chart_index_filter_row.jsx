import React from 'react';

const ChartIndexFilterRow = ({genre, result}) => {

  return (

    <div className="drop-down-row">
      <p className="genre">{genre}</p>
      <p className="filter">{result}</p>
    </div>

  )
}

export default ChartIndexFilterRow;