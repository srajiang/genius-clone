import React from 'react';

const ChartIndexFilterRow = ({ genre, result, updateGenre, updateNumSongs, currentSelectedGenre, currentSelectedResult }) => {

  const handleFilter = (e) => {

    updateNumSongs(e.target.innerText);
    
  }

  const handleGenre = (e) => {

    updateGenre(e.target.innerText);
  }

  

  const renderGenreCheck = () => {
    if ( currentSelectedGenre === genre) {
      return (<div><svg width="22" height="16.2" viewBox="-11 -8 44 32.4"><path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path></svg></div>)
    }
  }

  const renderResultCheck = () => {
    if ( currentSelectedResult === result ) {
      return (<div><svg width="22" height="16.2" viewBox="-11 -8 44 32.4"><path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path></svg></div>)
    }
  }

  return (

    <div className="drop-down-row">
      <div className="genre" onClick={handleGenre}>
        <div>{genre}</div>
        {renderGenreCheck()}
      </div>
      <div className="filter" onClick={handleFilter}>
        <div>{result}</div>
        {renderResultCheck()}
      </div>
    </div>

  )
}

export default ChartIndexFilterRow;