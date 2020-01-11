import React from 'react';

const ChartIndexFilterRow = ({ genre, result, updateGenre, updateNumSongs }) => {

  const handleFilter = (e) => {

    updateNumSongs(parseInt(e.currentTarget.innerText, 10));
    
  }

  return (

    <div className="drop-down-row">
      <p className="genre" onClick={() => updateGenre(genre)}>{genre}</p>
      <p className="filter" onClick={handleFilter}>{result}</p>
    </div>
  )
}

export default ChartIndexFilterRow;